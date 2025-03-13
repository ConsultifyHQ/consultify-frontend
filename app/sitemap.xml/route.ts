export async function GET() {
    const baseUrl = "https://consultifyCare.com"; // Change to your actual domain
  
    const urls = [
        `${baseUrl}/`, // Home (Landing Page - includes Wishlist, About, Contact)
        `${baseUrl}/dashboard`, // Dashboard (For authenticated users)
        `${baseUrl}/auth/login`, // Login Page
        `${baseUrl}/auth/register`, // Register Page
        // `${baseUrl}/profile`, // User Profile (If available)
        `${baseUrl}/legal/privacy-policy`, // Privacy Policy
        `${baseUrl}/legal/terms-of-service`, // Terms of Service
      ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((url) => `<url><loc>${url}</loc></url>`).join("")}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  