import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EstateEase",
  description: "Our privacy policy and how we protect your data",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-12 md:py-16 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-teal-100">Last updated: May 10, 2025</p>
          </div>
        </div>
      </section>

      <section className=" py-12 md:py-16 px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-muted-foreground">
              At EstateEase, we respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>
            <p className="text-muted-foreground">
              This privacy policy aims to give you information on how EstateEase
              collects and processes your personal data through your use of this
              website, including any data you may provide through this website
              when you sign up for our services, purchase a product, or take
              part in a promotion.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              The Data We Collect About You
            </h2>
            <p className="text-muted-foreground">
              Personal data, or personal information, means any information
              about an individual from which that person can be identified. It
              does not include data where the identity has been removed
              (anonymous data).
            </p>
            <p className="text-muted-foreground">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username or similar identifier, title, date of birth, and
                gender.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery
                address, email address, and telephone numbers.
              </li>
              <li>
                <strong>Financial Data</strong> includes bank account and
                payment card details.
              </li>
              <li>
                <strong>Transaction Data</strong> includes details about
                payments to and from you and other details of products and
                services you have purchased from us.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li>
                <strong>Profile Data</strong> includes your username and
                password, purchases or orders made by you, your interests,
                preferences, feedback, and survey responses.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website, products, and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your
                preferences in receiving marketing from us and our third parties
                and your communication preferences.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              How We Use Your Personal Data
            </h2>
            <p className="text-muted-foreground">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p className="text-muted-foreground">
              Generally, we do not rely on consent as a legal basis for
              processing your personal data although we will get your consent
              before sending third party direct marketing communications to you
              via email or text message. You have the right to withdraw consent
              to marketing at any time by contacting us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Data Security</h2>
            <p className="text-muted-foreground">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions, and they are subject to a duty of confidentiality.
            </p>
            <p className="text-muted-foreground">
              We have put in place procedures to deal with any suspected
              personal data breach and will notify you and any applicable
              regulator of a breach where we are legally required to do so.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Legal Rights</h2>
            <p className="text-muted-foreground">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data. These include the right
              to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p className="text-muted-foreground">
              If you wish to exercise any of the rights set out above, please
              contact us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <div className="text-muted-foreground">
              <p>EstateEase</p>
              <p>123 Real Estate Avenue</p>
              <p>Property City, State 12345</p>
              <p>Email: privacy@estateease.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/contact" className="text-teal-700 hover:underline">
              Contact us with any questions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
