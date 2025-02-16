import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar from "./Nav";
import Footer from "./Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";

const topics = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: `
      <p>
        At P.B CORP, your privacy is a top priority. We are committed to safeguarding your personal information and ensuring that it is handled responsibly and transparently. When you shop with us, we collect and use your data solely for the purposes of processing your orders, enhancing your shopping experience, and informing you of updates or promotions related to our products.
      </p>
      <p>
        We do not share, sell, or rent your data to third parties without your explicit consent. This includes your name, address, contact information, and payment details. Rest assured, all sensitive information is encrypted and stored securely, following industry-standard security practices.
      </p>
      <p>
        If you wish to review or update the personal information we have on file, you may contact us at any time. Similarly, if you'd like to opt out of promotional communications, we provide an easy unsubscribe option in every email.
      </p>
      <p>
        Please note that by using our website and placing an order, you consent to the collection and use of your data as outlined in this policy. If we make any changes to this policy, updates will be promptly reflected on our website.
      </p>
      <p>
        <strong>For further information or questions about our privacy practices, please contact:</strong>
      </p>
      <ul>
        <li>Email: privacy@tea-flow.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Monday - Friday, 9:00 AM - 5:00 PM (CST)</li>
      </ul>
    `
  },
  {
    id: "returns-and-exchanges",
    title: "Returns and Exchanges",
    content: `
      <p>
        P.B CORP is dedicated to sourcing only the highest quality products, and your satisfaction is extremely important to us. If you feel that the quality of our products is less than expected, we encourage you to reach out to our customer service team within 30 days of your order date for assistance.
      </p>
      <p>
        While we cannot honor returns, exchanges, or refunds for issues related to personal taste preferences, we are committed to replacing products or providing website credit for quality-related concerns. Please note, as an agricultural product, seasonal variances may naturally affect the flavor profiles of our teas. For this reason, we recommend trying our "Teaser" sample size before committing to larger purchases to ensure the tea meets your preferences.
      </p>
      <p>
        If you purchased your tea through a third-party retailer (e.g., Amazon, Whole Foods), please contact the retailer directly for any product-related concerns, as we do not have access to their purchase histories. We apologize for any inconvenience this may cause but appreciate your understanding in such cases.
      </p>
      <p>
        <strong>For any queries or assistance, feel free to reach out:</strong>
      </p>
      <ul>
        <li>Email: info@tea-flow.com</li>
        <li>WhatsApp Support: Monday - Friday, 9:00 AM - 5:00 PM (CST)</li>
      </ul>
      <p>
        Thank you for choosing P.B CORP and for your continued trust in our products!
      </p>
    `
  },
  {
    id: "terms-and-conditions",
    title: "Terms and Conditions",
    content: `
      <p>
        By accessing and using the P.B CORP website or purchasing our products, you agree to comply with and be bound by the following terms and conditions. These terms apply to all visitors, users, and customers of our website.
      </p>
      <ol>
        <li>
          <strong>Product Availability:</strong> All products are subject to availability. We reserve the right to limit quantities, discontinue products, or cancel orders due to unforeseen circumstances, including inventory shortages or pricing errors.
        </li>
        <li>
          <strong>Order Processing and Payments:</strong> All orders must be paid in full before they are processed and shipped. We accept major credit cards, PayPal, and other secure payment methods. In case of payment issues, our customer service team will contact you for resolution.
        </li>
        <li>
          <strong>Shipping:</strong> Shipping rates and delivery timelines are outlined on our website. While we strive to deliver orders promptly, we are not responsible for delays caused by courier services or customs regulations for international shipments.
        </li>
        <li>
          <strong>Returns and Replacements:</strong> Returns and refunds are subject to our "Returns and Exchanges" policy. Please review this policy carefully to understand your rights and our obligations.
        </li>
        <li>
          <strong>Changes to Terms:</strong> We reserve the right to update or modify these terms and conditions at any time. By continuing to use our website or purchase our products, you agree to the revised terms.
        </li>
      </ol>
      <p>
        <strong>If you have any questions about these terms, please contact us for clarification:</strong>
      </p>
      <ul>
        <li>Email: support@tea-flow.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Monday - Friday, 9:00 AM - 5:00 PM (CST)</li>
      </ul>
    `
  }
];

const TopicPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { id } = useParams();
  const topic = topics.find((topic) => topic.id === id);

  if (!topic) {
    return <>
    <Navbar/>
    <div className='text-2xl yeseva md:text-5xl lg:text-7xl my-10 text-center mx-auto'data-aos="fade-up" data-aos-duration="1000 " data-aos-delay="100">404 not found</div>
    <Footer/>
    </>;
  }

  return (
    <div className="overflow-x-hidden wild bg_grad text-orange-950 font-medium">
      <Navbar />
      <div className="flex flex-col items-center  mb-24">
        <div className="p-8 w-full">
          {/* Marquee Effect */}
          <Marquee
            behavior="scroll"
            speed={90}
            direction="right"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="md:text-7xl text-5xl mt-24 font-bold carltine overflow-y-hidden">
              {Array(5)
                .fill(`${topic.title}/ `)
                .join("")}
            </p>
          </Marquee>

          {/* Topic Content */}
          <div
            className="text-gray-700 mt-8 text-left leading-relaxed text-lg space-y-6"  data-aos="fade-up" data-aos-duration="200 "
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopicPage;
