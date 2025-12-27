MedVerify

MedVerify is a secure and intuitive platform designed for NGOs to efficiently manage and verify their medicine inventories. It allows organizations to track quantities, monitor expiry dates, and ensure that medicines reach the right people through a modern, easy-to-use dashboard.
MedVerify uses AWS Lambda to handle backend operations in a scalable and cost-efficient way, ensuring that medicine data is processed securely without maintaining dedicated servers. For notification and communication needs, AWS SES (Simple Email Service) is integrated to send important alerts, such as reminders for medicines nearing their expiry dates, directly to NGOs via email.

To efficiently manage expiry prioritization, the system applies a DSA-based Min Heap approach, where medicines are organized based on their expiry dates. This allows MedVerify to quickly identify medicines that are expiring soon and highlight them on the dashboard, reducing wastage and helping NGOs take timely action. The combination of cloud services and optimized data structures ensures both performance and reliability at scale.

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