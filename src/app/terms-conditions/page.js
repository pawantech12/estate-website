import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | EstateEase",
  description: "Our terms and conditions for using EstateEase services",
};

export default function TermsConditionsPage() {
  return (
    <main className="flex-1">
      <section className="bg-teal-700 py-12 md:py-16 px-10">
        <div className="">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms & Conditions
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
              These terms and conditions outline the rules and regulations for
              the use of EstateEase&apos;s Website and services. By accessing
              this website, we assume you accept these terms and conditions in
              full. Do not continue to use EstateEase&apos;s website if you do
              not accept all of the terms and conditions stated on this page.
            </p>
            <p className="text-muted-foreground">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and any or all Agreements:
              &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
              you, the person accessing this website and accepting the
              Company&apos;s terms and conditions. &quot;The Company&quot;,
              &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
              &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
              &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client
              and ourselves, or either the Client or ourselves.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">License</h2>
            <p className="text-muted-foreground">
              Unless otherwise stated, EstateEase and/or its licensors own the
              intellectual property rights for all material on EstateEase. All
              intellectual property rights are reserved. You may view and/or
              print pages from https://www.estateease.com for your own personal
              use subject to restrictions set in these terms and conditions.
            </p>
            <p className="text-muted-foreground">You must not:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Republish material from https://www.estateease.com</li>
              <li>
                Sell, rent or sub-license material from
                https://www.estateease.com
              </li>
              <li>
                Reproduce, duplicate or copy material from
                https://www.estateease.com
              </li>
              <li>
                Redistribute content from EstateEase (unless content is
                specifically made for redistribution)
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">User Comments</h2>
            <p className="text-muted-foreground">
              Certain parts of this website offer the opportunity for users to
              post and exchange opinions, information, material and data
              (&apos;Comments&apos;) in areas of the website. EstateEase does
              not screen, edit, publish or review Comments prior to their
              appearance on the website and Comments do not reflect the views or
              opinions of EstateEase, its agents or affiliates. Comments reflect
              the view and opinion of the person who posts such view or opinion.
              To the extent permitted by applicable laws EstateEase shall not be
              responsible or liable for the Comments or for any loss cost,
              liability, damages or expenses caused and or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
            </p>
            <p className="text-muted-foreground">
              EstateEase reserves the right to monitor all Comments and to
              remove any Comments which it considers in its absolute discretion
              to be inappropriate, offensive or otherwise in breach of these
              Terms and Conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Content Liability</h2>
            <p className="text-muted-foreground">
              We shall have no responsibility or liability for any content
              appearing on your Web site. You agree to indemnify and defend us
              against all claims arising out of or based upon your Website. No
              link(s) may appear on any page on your Web site or within any
              context containing content or materials that may be interpreted as
              libelous, obscene or criminal, or which infringes, otherwise
              violates, or advocates the infringement or other violation of, any
              third party rights.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Disclaimer</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website (including, without limitation, any
              warranties implied by law in respect of satisfactory quality,
              fitness for purpose and/or the use of reasonable care and skill).
              Nothing in this disclaimer will:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                limit or exclude our or your liability for death or personal
                injury resulting from negligence;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
            <p className="text-muted-foreground">
              The limitations and exclusions of liability set out in this
              Section and elsewhere in this disclaimer: (a) are subject to the
              preceding paragraph; and (b) govern all liabilities arising under
              the disclaimer or in relation to the subject matter of this
              disclaimer, including liabilities arising in contract, in tort
              (including negligence) and for breach of statutory duty.
            </p>
            <p className="text-muted-foreground">
              To the extent that the website and the information and services on
              the website are provided free of charge, we will not be liable for
              any loss or damage of any nature.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="text-muted-foreground">
              <p>EstateEase</p>
              <p>123 Real Estate Avenue</p>
              <p>Property City, State 12345</p>
              <p>Email: legal@estateease.com</p>
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
