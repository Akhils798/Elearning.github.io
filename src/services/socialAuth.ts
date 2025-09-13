// import { User } from '../types';

// Social login providers
export type SocialProvider = 'google' | 'github';

// Social user data interface
interface SocialUserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: SocialProvider;
}

class SocialAuthService {
  // private readonly GOOGLE_CLIENT_ID = 'demo-google-client-id';
  // private readonly GITHUB_CLIENT_ID = 'demo-github-client-id';
  // private readonly REDIRECT_URI = window.location.origin + '/auth/callback';

  // Google OAuth login (Real implementation)
  async loginWithGoogle(): Promise<{ success: boolean; user?: SocialUserData; message: string }> {
    try {
      // Check if Google API is available
      if (typeof window !== 'undefined' && window.gapi) {
        // Real Google OAuth implementation
        return new Promise((resolve) => {
          window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
              client_id: 'YOUR_GOOGLE_CLIENT_ID' // Replace with your actual Google Client ID
            }).then(() => {
              const authInstance = window.gapi.auth2.getAuthInstance();
              authInstance.signIn().then((googleUser: any) => {
                const profile = googleUser.getBasicProfile();
                const realGoogleUser: SocialUserData = {
                  id: `google_${profile.getId()}`,
                  name: profile.getName(),
                  email: profile.getEmail(),
                  avatar: profile.getImageUrl(),
                  provider: 'google'
                };

                localStorage.setItem('google_id_token', googleUser.getAuthResponse().id_token);
                resolve({ success: true, user: realGoogleUser, message: 'Google login successful!' });
              }).catch((error: any) => {
                console.error('Google sign-in error:', error);
                resolve({ success: false, message: 'Google sign-in failed. Please try again.' });
              });
            }).catch((error: any) => {
              console.error('Google auth init error:', error);
              resolve({ success: false, message: 'Google authentication failed. Please try again.' });
            });
          });
        });
      } else {
        // Fallback to demo mode if Google API not available
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockGoogleUser: SocialUserData = {
          id: `google_${Date.now()}`,
          name: 'Demo Google User',
          email: 'demo.google@example.com',
          avatar: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&h=150&fit=crop&crop=face',
          provider: 'google'
        };

        localStorage.setItem('google_id_token', 'demo_token_' + Date.now());
        return { success: true, user: mockGoogleUser, message: 'Google login successful! (Demo Mode - Google API not available)' };
      }
    } catch (error) {
      console.error('Google login error:', error);
      return { success: false, message: 'Google login failed. Please try again.' };
    }
  }

  // GitHub OAuth login (Real implementation)
  async loginWithGitHub(): Promise<{ success: boolean; user?: SocialUserData; message: string }> {
    try {
      // Store the intended redirect URL
      const currentPath = window.location.pathname + window.location.search;
      localStorage.setItem('github_redirect_after_login', currentPath);
      
      // Real GitHub OAuth redirect
      const clientId = 'YOUR_GITHUB_CLIENT_ID'; // Replace with your actual GitHub Client ID
      const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
      const scope = 'user:email';
      
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${Date.now()}`;
      
      // Redirect to GitHub OAuth
      window.location.href = githubAuthUrl;
      
      // This won't be reached due to redirect, but return for TypeScript
      return { success: false, message: 'Redirecting to GitHub...' };
    } catch (error) {
      console.error('GitHub login error:', error);
      return { success: false, message: 'GitHub login failed. Please try again.' };
    }
  }

  // Handle GitHub OAuth callback (Real implementation)
  async handleGitHubCallback(code: string): Promise<{ success: boolean; user?: SocialUserData; message: string }> {
    try {
      // Exchange code for access token
      const clientId = 'YOUR_GITHUB_CLIENT_ID'; // Replace with your actual GitHub Client ID
      const clientSecret = 'YOUR_GITHUB_CLIENT_SECRET'; // Replace with your actual GitHub Client Secret
      
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
        }),
      });

      const tokenData = await tokenResponse.json();
      
      if (tokenData.access_token) {
        // Get user info from GitHub API
        const userResponse = await fetch('https://api.github.com/user', {
          headers: {
            'Authorization': `Bearer ${tokenData.access_token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        const userData = await userResponse.json();
        
        // Get user email (might be private)
        let email = userData.email;
        if (!email) {
          const emailResponse = await fetch('https://api.github.com/user/emails', {
            headers: {
              'Authorization': `Bearer ${tokenData.access_token}`,
              'Accept': 'application/vnd.github.v3+json',
            },
          });
          const emails = await emailResponse.json();
          email = emails.find((e: any) => e.primary)?.email || emails[0]?.email;
        }

        const realGitHubUser: SocialUserData = {
          id: `github_${userData.id}`,
          name: userData.name || userData.login,
          email: email || `${userData.login}@github.com`,
          avatar: userData.avatar_url,
          provider: 'github'
        };

        localStorage.setItem('github_access_token', tokenData.access_token);
        return { success: true, user: realGitHubUser, message: 'GitHub login successful!' };
      } else {
        return { success: false, message: 'Failed to get GitHub access token' };
      }
    } catch (error) {
      console.error('GitHub callback error:', error);
      return { success: false, message: 'GitHub login failed. Please try again.' };
    }
  }

  // Check if user has persistent social login
  async checkPersistentLogin(): Promise<{ success: boolean; user?: SocialUserData; message: string }> {
    try {
      const googleToken = localStorage.getItem('google_id_token');
      if (googleToken) {
        const mockGoogleUser: SocialUserData = {
          id: 'google_persistent_user',
          name: 'Demo Google User',
          email: 'demo.google@example.com',
          avatar: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&h=150&fit=crop&crop=face',
          provider: 'google'
        };
        return { success: true, user: mockGoogleUser, message: 'Persistent Google login found! (Demo Mode)' };
      }

      const githubToken = localStorage.getItem('github_access_token');
      if (githubToken) {
        const mockGitHubUser: SocialUserData = {
          id: 'github_persistent_user',
          name: 'Demo GitHub User',
          email: 'demo.github@example.com',
          avatar: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&h=150&fit=crop&crop=face',
          provider: 'github'
        };
        return { success: true, user: mockGitHubUser, message: 'Persistent GitHub login found! (Demo Mode)' };
      }

      return { success: false, message: 'No persistent login found' };
    } catch (error) {
      console.error('Persistent login check error:', error);
      return { success: false, message: 'Error checking persistent login' };
    }
  }

  // Logout from social providers
  async logout(): Promise<void> {
    try {
      localStorage.removeItem('google_id_token');
      localStorage.removeItem('github_access_token');
      localStorage.removeItem('github_redirect_after_login');
    } catch (error) {
      console.error('Social logout error:', error);
    }
  }

  // Get redirect URL after GitHub login
  getGitHubRedirectUrl(): string | null {
    return localStorage.getItem('github_redirect_after_login');
  }

  // Clear redirect URL
  clearGitHubRedirectUrl(): void {
    localStorage.removeItem('github_redirect_after_login');
  }
}

const socialAuthService = new SocialAuthService();
export default socialAuthService;

declare global {
  interface Window {
    gapi?: any;
  }
} 