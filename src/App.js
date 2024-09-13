import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<button onClick={() => methodDoesNotExist()}>Break the world</button>;
			<header className="App-header">
				<h1>Privacy Policy</h1>
				<p>Last updated: [12 September 2024]</p>
				<section>
					<h2>1. Information We Collect</h2>
					<p>
						We collect the following types of information to provide and improve
						our services:
						<ul>
							<li>
								<strong>Personal Information:</strong> When you create an
								account, we may collect your name, email address, and contact
								details.
							</li>
							<li>
								<strong>Device Information:</strong> We collect information
								about your device, including its operating system, IP address,
								and mobile network information.
							</li>
							<li>
								<strong>Usage Data:</strong> We may collect information about
								how you interact with the App, such as pages viewed and features
								used.
							</li>
						</ul>
					</p>
				</section>
				<section>
					<h2>2. How We Use Your Information</h2>
					<p>
						We use the collected data for various purposes:
						<ul>
							<li>To provide and maintain the App.</li>
							<li>To personalize your experience and improve the App.</li>
							<li>
								To communicate with you about updates, promotions, or customer
								support.
							</li>
							<li>To analyze usage and optimize the App’s performance.</li>
						</ul>
					</p>
				</section>
				<section>
					<h2>3. Sharing Your Information</h2>
					<p>
						We do not sell, trade, or rent your personal information to third
						parties. However, we may share your information:
						<ul>
							<li>With service providers who help us operate the App.</li>
							<li>
								As required by law or to protect the rights, property, or safety
								of the company, users, or the public.
							</li>
						</ul>
					</p>
				</section>
				<section>
					<h2>4. Security</h2>
					<p>
						We take reasonable measures to protect your information from
						unauthorized access, alteration, disclosure, or destruction.
					</p>
				</section>
				<section>
					<h2>5. Children’s Privacy</h2>
					<p>
						Our App is not intended for children under the age of 13. We do not
						knowingly collect personal information from children.
					</p>
				</section>
				<section>
					<h2>6. Changes to This Privacy Policy</h2>
					<p>
						We may update this privacy policy from time to time. We will notify
						you of any changes by posting the new policy on this page.
					</p>
				</section>
				<section>
					<h2>7. Contact Us</h2>
					<p>
						If you have any questions about this privacy policy, please contact
						us at:
						<br />
						[Your Company Name] <br />
						Email: [Your Email Address] <br />
						Address: [Your Company Address]
					</p>
				</section>
			</header>
		</div>
	);
}

export default App;
