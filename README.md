MedVerify

MedVerify is a secure and intuitive platform designed for NGOs to efficiently manage and verify their medicine inventories. It allows organizations to track quantities, monitor expiry dates, and ensure that medicines reach the right people through a modern, easy-to-use dashboard.

Features:

1. Secure Authentication: JWT-based login and signup ensures only authorized NGOs can access the dashboard.

2. Add Medicines: NGOs can add new medicines with details like name, manufacturer, quantity, and expiry date.

3. View Inventory: Medicines are displayed in a responsive table with expiry tracking.

4. Expiry Alerts: Medicines expiring in less than 8 days are highlighted in red.

5. Professional Dashboard: Clean, modern UI built with React, Tailwind CSS, and ShadCN components.

6. Responsive Design: Fully optimized for both desktop and mobile screens.

Tech Stack:

-> Frontend: React.js, Tailwind CSS, ShadCN UI components, Framer Motion for animations

-> Backend: Node.js, Express.js, DynamoDB

-> Authentication: JWT-based

-> Routing: React Router

Installation:

1. Clone the repository - git clone https://github.com/rohitbera07/medverify.git
                          cd medverify/frontend (for frontend)
                          cd medverify/backend (for backend)
2. Install dependencies - npm install
3. Run the dev server   - npm run dev