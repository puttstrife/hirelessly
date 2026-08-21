import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Service Agreement | Hirelessly",
  description: "Hirelessly Master Service Agreement governing all managed AI assistant services.",
  alternates: { canonical: "https://hirelessly.com/service-agreement" },
  robots: { index: false },
};

const toc = [
  { id: "s1", title: "Definitions" },
  { id: "s2", title: "Services & Delegation of Authority" },
  { id: "s3", title: "Policy Guardrails — What AI Agents Will Not Do" },
  { id: "s4", title: "Client Responsibilities" },
  { id: "s5", title: "Data Access, Privacy & Security" },
  { id: "s6", title: "Payment Terms" },
  { id: "s7", title: "Service Levels (SLA)" },
  { id: "s8", title: "Warranties" },
  { id: "s9", title: "Limitation of Liability" },
  { id: "s10", title: "Indemnification" },
  { id: "s11", title: "Acceptable Use Policy" },
  { id: "s12", title: "Term & Termination" },
  { id: "s13", title: "Confidentiality" },
  { id: "s14", title: "Intellectual Property" },
  { id: "s15", title: "General Provisions" },
  { id: "s16", title: "Signature & Execution" },
];

export default function ServiceAgreement() {
  return (
    <>
      {/* Cover */}
      <div style={{ background: "linear-gradient(135deg, #1A1B2E 0%, #252742 100%)", padding: "72px 20px", marginTop: 60 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#8B8FFF", letterSpacing: "-0.02em", marginBottom: 48, fontFamily: "Roboto Condensed, sans-serif" }}>
            Hirelessly
          </div>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12, fontFamily: "Roboto Condensed, sans-serif" }}>
            Master Service Agreement
          </h1>
          <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>Managed AI Assistant Services</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
            <div><strong style={{ color: "#fff" }}>Document Version:</strong> 1.0 — March 2026</div>
            <div><strong style={{ color: "#fff" }}>Governing Law:</strong> Kingdom of Thailand</div>
            <div><strong style={{ color: "#fff" }}>Provider:</strong> Hirelessly Co., Ltd.</div>
          </div>
          <p style={{ marginTop: 24, fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
            This agreement governs all managed AI assistant services provided by Hirelessly.<br />
            A signed Statement of Work (SOW) is required to activate services under this MSA.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Intro */}
        <p style={prose}>
          This <strong>Master Service Agreement</strong> (&quot;Agreement&quot;) is entered into between <strong>Hirelessly Co., Ltd.</strong> (&quot;Hirelessly,&quot; &quot;we,&quot; &quot;us&quot;) and the business entity identified in the accompanying Statement of Work (&quot;Client,&quot; &quot;you&quot;). Together, Hirelessly and Client are referred to as the &quot;Parties.&quot;
        </p>
        <p style={prose}>
          This Agreement governs all managed AI assistant services — including the deployment, operation, and management of AI agents — provided by Hirelessly to Client. Services do not begin until both Parties have executed a Statement of Work referencing this Agreement.
        </p>
        <Callout type="info">
          <strong>Plain English Summary:</strong> This contract defines what Hirelessly will do for you, what you are responsible for, how your data is handled, what AI agents are and are not authorized to do on your behalf, and what happens if something goes wrong. Read it carefully before signing.
        </Callout>

        {/* TOC */}
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, margin: "40px 0" }}>
          <h2 style={{ ...sectionH2, marginBottom: 20 }}>Contents</h2>
          <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} style={{ fontSize: "0.9375rem", color: "var(--brand-primary)", textDecoration: "none" }}>
                  {i + 1}. {item.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <Section id="s1" num="Section 1" title="Definitions">
          <p style={prose}>The following terms have specific meanings throughout this Agreement:</p>
          <table style={tableStyle}>
            <thead><tr><Th>Term</Th><Th>Meaning</Th></tr></thead>
            <tbody>
              {[
                ["AI Agent", "An automated software process deployed by Hirelessly that performs defined tasks within Client's authorized business tools (e.g., Email Agent, Scheduler Agent, CRM Agent)."],
                ["Authorized Tools", "The third-party business applications (e.g., Gmail, HubSpot, Slack, Salesforce, Google Calendar) that Client grants Hirelessly access to via OAuth or API key, as documented in the Authorization & Access Schedule."],
                ["Delegation of Authority", "The explicit written definition of what actions AI Agents are authorized to take autonomously on Client's behalf, and what actions require human approval before execution."],
                ["HITL (Human-in-the-Loop)", "A workflow step that pauses agent execution and routes a decision to a designated human contact on Client's team before proceeding."],
                ["Statement of Work (SOW)", "A project-specific document executed by both Parties that specifies the agents deployed, tools connected, workflows configured, fees, and SLAs for a specific engagement."],
                ["Client Data", "Any data, content, or information that Client or its end-customers provide to Hirelessly or that Hirelessly accesses through Authorized Tools in connection with performing the Services."],
                ["End-Customer", "A third party (customer, lead, partner) who interacts with Client's business and whose data may be processed by AI Agents as part of the Services."],
                ["Confidential Information", "Any non-public business information disclosed by one Party to the other in connection with this Agreement, including pricing, workflows, credentials, and Client Data."],
                ["Services", "The managed AI assistant services described in the applicable SOW, including agent deployment, configuration, monitoring, and optimization."],
              ].map(([term, def]) => (
                <tr key={term}><Td><strong>{term}</strong></Td><Td>{def}</Td></tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* Section 2 */}
        <Section id="s2" num="Section 2" title="Services & Delegation of Authority">
          <h3 style={sectionH3}>2.1 Nature of Services</h3>
          <p style={prose}>Hirelessly is a <strong>managed service provider</strong>, not a software platform. We do not provide Client with access to a self-service tool. Instead, Hirelessly&apos;s team deploys, configures, and operates AI Agents on Client&apos;s behalf within Client&apos;s own Authorized Tools. The relationship is that of service provider and client — not licensor and licensee.</p>
          <h3 style={sectionH3}>2.2 What AI Agents Are Authorized to Do</h3>
          <p style={prose}>Each SOW includes a <strong>Delegation of Authority Schedule</strong> specifying the exact actions each AI Agent is authorized to take. No agent may take actions outside those defined in the applicable SOW. Typical authorized actions include:</p>
          <Bullets items={[
            "Reading, categorizing, drafting, and sending email responses within parameters set by Client",
            "Creating, modifying, and accepting calendar events within Client's calendar application",
            "Updating, tagging, and creating records in Client's CRM within defined field boundaries",
            "Responding to inbound customer support inquiries using Client-approved knowledge base content",
            "Qualifying inbound leads and booking discovery calls per Client's defined criteria",
            "Compiling and delivering automated reports from Client's connected data sources",
          ]} />
          <h3 style={sectionH3}>2.3 What AI Agents Are NOT Authorized to Do</h3>
          <p style={prose}>Unless explicitly stated in the SOW Delegation of Authority Schedule, AI Agents are <strong>never</strong> authorized to:</p>
          <Bullets items={[
            "Commit to pricing, delivery timelines, refunds, or contractual terms on Client's behalf",
            "Accept, decline, or counter offers that create legally binding obligations",
            "Access systems, data, or OAuth scopes beyond those documented in the Authorization & Access Schedule",
            "Delete client records, contacts, or data without explicit per-action written approval",
            "Send outbound communications to lists exceeding thresholds defined in the SOW without HITL approval",
            "Take any action in HIPAA, FINRA, or SEC-regulated workflows without a separate Compliance Addendum",
            "Issue or process payments, charge cards, or modify subscription billing",
            "Respond to formal legal notices, regulatory inquiries, or demand letters",
          ]} />
          <Callout type="warning">
            <strong>Important:</strong> Under applicable law (UETA, E-SIGN), communications sent by an AI Agent on Client&apos;s behalf may constitute legally binding commitments. The restrictions above exist to protect Client. Client must not instruct Hirelessly to override these restrictions without independent legal review.
          </Callout>
          <h3 style={sectionH3}>2.4 Human-in-the-Loop (HITL) Escalation</h3>
          <p style={prose}>Certain actions are always routed to Client&apos;s designated HITL contact before execution. The SOW defines the specific triggers. Standard HITL triggers include complaints, refund requests, legal inquiries, bulk outbound sends, and any action outside the agent&apos;s trained knowledge base. Hirelessly will surface HITL escalations to Client within the response time defined in the SOW SLA. If Client does not respond within the defined window, the agent takes no action and logs the item as pending.</p>
          <h3 style={sectionH3}>2.5 Onboarding</h3>
          <p style={prose}>Services begin with an onboarding session where Hirelessly maps Client&apos;s workflows, documents the Delegation of Authority, establishes the Authorization &amp; Access Schedule, and configures agents. Client must designate a primary contact and a HITL contact before onboarding begins. Target activation is within 5 business days of completed onboarding for standard tiers.</p>
        </Section>

        {/* Section 3 */}
        <Section id="s3" num="Section 3" title="Policy Guardrails — What AI Agents Will Not Do">
          <p style={prose}>The following guardrails apply to all engagements regardless of SOW terms. These are not negotiable and exist to protect both Parties and Client&apos;s end-customers.</p>
          <h3 style={sectionH3}>Layer 1 — Absolute Prohibitions (No Exceptions)</h3>
          <NumberedList items={[
            ["No legally binding commitments.", "AI Agents will not make, accept, counter, or imply offers that constitute binding contracts, including price quotations as offers, acceptance of vendor terms, or agreement to service-level commitments."],
            ["No financial transactions.", "AI Agents will not initiate, approve, modify, or reverse any financial transaction including payments, refunds, chargebacks, or subscription changes."],
            ["No regulated health or legal content.", "AI Agents will not provide, generate, or relay medical advice, legal advice, tax advice, or investment advice of any kind, even if instructed to do so by Client."],
            ["No unauthorized data access.", "AI Agents will not access any system, database, or data category beyond the OAuth scopes and API keys documented in the current Authorization & Access Schedule."],
            ["No destructive data actions.", "AI Agents will not delete, overwrite, or permanently modify Client records unless explicitly authorized per-action in writing by Client's designated contact."],
            ["No communications to regulated categories.", "AI Agents will not send debt collection communications, legal notices, medical information to patients, or any communication regulated under HIPAA, FDCPA, or equivalent laws without a signed Compliance Addendum."],
            ["No SMS or voice automation.", "AI Agents will not send automated SMS messages or make automated voice calls without a separate TCPA Compliance Rider executed by both Parties."],
            ["No spam or deceptive communications.", "AI Agents will not send unsolicited bulk email, use deceptive subject lines, or send commercial email in violation of CAN-SPAM, CASL, or applicable anti-spam laws."],
          ]} />
          <h3 style={sectionH3}>Layer 2 — Human Approval Required Before Action</h3>
          <Bullets items={[
            "Outbound email to any list exceeding the threshold defined in Client's SOW",
            "CRM field updates affecting more than the record threshold defined in Client's SOW",
            "Any inbound complaint, refund request, or escalation from Client's end-customer",
            "Any response to a communication that references legal action, regulatory inquiry, or dispute",
            "Any calendar action on behalf of Client's CEO, founder, or equivalent executive",
            "Any action involving pricing, discounts, or commercial terms",
          ]} />
          <h3 style={sectionH3}>Layer 3 — Outside Standard Retainer Scope</h3>
          <Bullets items={[
            "Social media content requiring legal or brand review before publishing",
            "Contract drafting, redlining, or legal document preparation",
            "Customer dispute resolution for transactions above $500 in value",
            "Any workflow involving Client's end-customer payment card data (PCI scope)",
            "Work in HIPAA-covered environments without a signed BAA (Business Associate Agreement)",
          ]} />
        </Section>

        {/* Section 4 */}
        <Section id="s4" num="Section 4" title="Client Responsibilities">
          <p style={prose}>Hirelessly&apos;s services depend on Client fulfilling the following obligations. Failure to do so may result in degraded service, suspension of agents, or additional fees.</p>
          <NumberedList items={[
            ["Own and maintain your tools.", "Client is responsible for subscribing to, paying for, and maintaining all Authorized Tools (Gmail, HubSpot, Salesforce, Slack, etc.). Hirelessly does not provide, resell, or manage third-party tool subscriptions on Client's behalf."],
            ["Grant and maintain access.", "Client must provide valid OAuth connections or API keys for all tools listed in the Authorization & Access Schedule. Client must notify Hirelessly within 24 hours if access credentials are revoked, expired, or compromised."],
            ["Designate contacts.", "Client must maintain an active primary contact and HITL contact throughout the engagement. These contacts must be reachable during business hours for escalations."],
            ["Provide accurate information.", "Client is responsible for ensuring that the knowledge bases, templates, and workflow rules provided to Hirelessly are accurate, lawful, and up to date. AI Agent outputs are only as accurate as the information Client provides."],
            ["Obtain end-customer consents.", "Client is responsible for obtaining all required consents from its end-customers for automated AI processing of their data, including any consents required under GDPR, CCPA, or applicable privacy law."],
            ["Review agent activity.", "Client agrees to review the weekly activity digest provided by Hirelessly and notify Hirelessly within 5 business days of any agent output that appears incorrect, out-of-scope, or in need of adjustment."],
            ["Comply with applicable law.", "Client is responsible for ensuring that the use of Hirelessly's services in its business complies with all applicable laws, including email marketing laws, data protection laws, and industry-specific regulations."],
            ["Do not instruct agents outside guardrails.", "Client must not instruct or attempt to instruct Hirelessly to configure agents in ways that violate Section 3 of this Agreement."],
          ]} />
        </Section>

        {/* Section 5 */}
        <Section id="s5" num="Section 5" title="Data Access, Privacy & Security">
          <h3 style={sectionH3}>5.1 Data Processing Roles</h3>
          <p style={prose}>For purposes of applicable data protection law, Client is the <strong>data controller</strong> and Hirelessly is a <strong>data processor</strong>. Hirelessly processes Client Data only on documented instructions from Client as set out in this Agreement and the applicable SOW.</p>
          <h3 style={sectionH3}>5.2 What Data Hirelessly Accesses</h3>
          <p style={prose}>Hirelessly accesses only the data categories and tool scopes documented in the Authorization &amp; Access Schedule. Hirelessly will not request OAuth scopes broader than necessary for the services defined in the SOW (&quot;principle of least privilege&quot;).</p>
          <h3 style={sectionH3}>5.3 How Hirelessly Uses Client Data</h3>
          <p style={prose}>Client Data is used solely to perform the Services. Hirelessly will not:</p>
          <Bullets items={[
            "Sell, rent, or share Client Data with third parties for commercial purposes",
            "Use Client Data to train general-purpose AI models without Client's explicit written consent",
            "Retain Client Data beyond 30 days after termination of the Agreement",
            "Transfer Client Data outside the country of processing without appropriate safeguards",
          ]} />
          <h3 style={sectionH3}>5.4 Sub-Processors</h3>
          <p style={prose}>Hirelessly uses third-party AI and infrastructure providers (&quot;sub-processors&quot;) to deliver the Services. Current sub-processors include AI model providers (e.g., Anthropic, OpenAI) and cloud infrastructure (e.g., AWS, Vercel). A current sub-processor list is available on request. Hirelessly will notify Client 14 days before adding a new sub-processor that processes Client Data.</p>
          <h3 style={sectionH3}>5.5 Security Standards</h3>
          <Bullets items={[
            "Encrypted credential storage for all OAuth tokens and API keys",
            "Access controls limiting which Hirelessly team members can access Client configurations",
            "Regular security reviews of agent infrastructure",
            "Incident response procedures including breach notification",
          ]} />
          <h3 style={sectionH3}>5.6 Breach Notification</h3>
          <p style={prose}>In the event of a security incident affecting Client Data, Hirelessly will notify Client within <strong>72 hours</strong> of becoming aware of the incident, provide details of the data affected and the steps taken to contain it, and cooperate fully with Client&apos;s incident response.</p>
          <h3 style={sectionH3}>5.7 Data Return and Deletion</h3>
          <p style={prose}>Upon termination of this Agreement, Hirelessly will revoke all OAuth tokens and API connections within 48 hours, provide Client with a summary of all agent configurations built during the engagement, and delete or return all Client Data within 30 days as directed by Client.</p>
        </Section>

        {/* Section 6 */}
        <Section id="s6" num="Section 6" title="Payment Terms">
          <NumberedList items={[
            ["Retainer structure.", "Fees are billed as a monthly retainer on the 1st of each calendar month, covering services for that month. Annual plans are billed upfront at the discounted rate specified in the SOW."],
            ["Payment method.", "Client authorizes payment by credit card or ACH bank transfer. Payment is due within 15 days of invoice issuance (\"net 15\")."],
            ["Late payment.", "Invoices unpaid after a 5-day grace period accrue interest at 1.5% per month. Hirelessly may suspend (not terminate) AI Agents after 10 days of non-payment without incurring liability to Client. Services resume within 24 hours of payment receipt."],
            ["Scope and change orders.", "The monthly retainer covers the services defined in the SOW. Work outside that scope requires a written Change Order with agreed additional fees before work begins."],
            ["No refunds for partial months.", "Monthly retainer fees are non-refundable. If Client terminates mid-month, the final month's retainer is not prorated. Annual plan refunds are limited to unused complete months at the standard monthly rate."],
            ["Price changes.", "Hirelessly will provide 60 days written notice before increasing retainer rates. Changes do not apply during a pre-paid annual term."],
            ["Taxes.", "Fees are exclusive of applicable sales, use, VAT, or similar taxes. Client is responsible for all such taxes, except for taxes based on Hirelessly's net income."],
          ]} />
        </Section>

        {/* Section 7 */}
        <Section id="s7" num="Section 7" title="Service Levels (SLA)">
          <p style={prose}>Service level commitments for each engagement are defined in the SOW. Standard SLAs for each plan tier are as follows:</p>
          <table style={tableStyle}>
            <thead><tr><Th>Tier</Th><Th>Agent Processing Time</Th><Th>HITL Escalation Surfaced</Th><Th>Support Response</Th></tr></thead>
            <tbody>
              <tr><Td>Assisted ($149/mo)</Td><Td>Within 30 min of trigger</Td><Td>Within 2 business hours</Td><Td>Next business day</Td></tr>
              <tr><Td>Copilot ($199/mo)</Td><Td>Within 15 min of trigger</Td><Td>Within 1 business hour</Td><Td>Within 4 business hours</Td></tr>
              <tr><Td>Autopilot ($399/mo)</Td><Td>Within 5 min of trigger</Td><Td>Within 30 minutes</Td><Td>Within 2 business hours</Td></tr>
            </tbody>
          </table>
          <p style={prose}><strong>SLA Remedy:</strong> If Hirelessly fails to meet the processing time SLA in more than 5% of trigger events in a calendar month, Client is entitled to a service credit of 10% of that month&apos;s retainer, applied to the following invoice. Service credits are the sole remedy for SLA failures.</p>
          <p style={prose}><strong>Exclusions:</strong> SLAs do not apply during: scheduled maintenance (minimum 48 hours notice), outages caused by third-party tool providers, or force majeure events.</p>
        </Section>

        {/* Section 8 */}
        <Section id="s8" num="Section 8" title="Warranties">
          <h3 style={sectionH3}>8.1 Hirelessly Warrants That:</h3>
          <Bullets items={[
            "Services will be performed professionally and in accordance with industry standards for managed AI services",
            "AI Agents will operate within the Delegation of Authority and Policy Guardrails defined in this Agreement and the applicable SOW",
            "Hirelessly has the right to enter into this Agreement and perform the Services",
            "Hirelessly maintains security practices appropriate to the nature of Client Data processed",
          ]} />
          <h3 style={sectionH3}>8.2 Warranty Exclusions</h3>
          <Bullets items={[
            "Client-provided instructions, templates, or knowledge base content that were inaccurate, outdated, or unlawful",
            "Client's failure to maintain Authorized Tools or provide access as required under Section 4",
            "Actions explicitly approved by Client's HITL contact",
            "Third-party tool outages, API changes, or rate limits outside Hirelessly's control",
            "AI model outputs that fall within expected statistical variation for the model tier used",
          ]} />
          <h3 style={sectionH3}>8.3 No Outcome Guarantee</h3>
          <p style={prose}>Hirelessly does not guarantee specific business outcomes including but not limited to revenue generated, leads converted, support tickets resolved, or cost savings achieved. Performance metrics in marketing materials are illustrative averages, not contractual commitments.</p>
          <Callout type="warning">
            <strong>Disclaimer:</strong> EXCEPT AS EXPRESSLY SET OUT IN SECTION 8.1, HIRELESSLY PROVIDES THE SERVICES &quot;AS IS&quot; AND DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </Callout>
        </Section>

        {/* Section 9 */}
        <Section id="s9" num="Section 9" title="Limitation of Liability">
          <h3 style={sectionH3}>9.1 Liability Cap</h3>
          <p style={prose}><strong>Hirelessly&apos;s total aggregate liability</strong> to Client arising out of or related to this Agreement is capped at the <strong>total fees paid by Client in the 12 months immediately preceding the event giving rise to the claim</strong>.</p>
          <h3 style={sectionH3}>9.2 Mutual Exclusion of Consequential Damages</h3>
          <p style={prose}>Neither Party will be liable to the other for any <strong>indirect, incidental, special, consequential, or punitive damages</strong> — including lost profits, lost revenue, loss of data, business interruption, or reputational harm — even if advised of the possibility of such damages.</p>
          <h3 style={sectionH3}>9.3 Exceptions to the Cap</h3>
          <Bullets items={[
            "Hirelessly's gross negligence or willful misconduct causing a data breach of Client Data",
            "Hirelessly's indemnification obligations under Section 10 for IP infringement claims",
            "Either Party's breach of confidentiality obligations under Section 13",
            "Death or personal injury caused by a Party's negligence",
          ]} />
          <Callout type="danger">
            <strong>Why this matters:</strong> AI agents operate at speed and scale. A misconfigured agent could interact with hundreds of records before a human notices. The liability cap ensures a single error does not create existential exposure for either Party.
          </Callout>
        </Section>

        {/* Section 10 */}
        <Section id="s10" num="Section 10" title="Indemnification">
          <h3 style={sectionH3}>10.1 Hirelessly Indemnifies Client Against:</h3>
          <Bullets items={[
            "Third-party claims arising from AI Agents acting outside the Delegation of Authority or Policy Guardrails — provided Client did not instruct or approve the out-of-scope action",
            "Data breaches caused by Hirelessly's failure to maintain security obligations under Section 5",
            "Third-party intellectual property infringement claims arising from Hirelessly's underlying technology (not Client-provided content)",
          ]} />
          <h3 style={sectionH3}>10.2 Client Indemnifies Hirelessly Against:</h3>
          <Bullets items={[
            "Third-party claims arising from actions Client's HITL contact explicitly approved before execution",
            "Claims from Client's end-customers arising from Client's failure to obtain required data processing consents",
            "Regulatory actions or fines arising from Client's failure to comply with applicable law",
            "Claims arising from inaccurate, outdated, or unlawful content Client provided as knowledge base or templates",
            "Client's direction to override or circumvent Policy Guardrails defined in Section 3",
          ]} />
          <h3 style={sectionH3}>10.3 Indemnification Process</h3>
          <p style={prose}>The indemnified Party must: (a) promptly notify the indemnifying Party in writing of any claim, (b) give the indemnifying Party sole control of the defense, and (c) reasonably cooperate at the indemnifying Party&apos;s expense.</p>
        </Section>

        {/* Section 11 */}
        <Section id="s11" num="Section 11" title="Acceptable Use Policy">
          <p style={prose}>Client agrees not to use the Services to:</p>
          <NumberedList items={[
            ["", "Send spam, unsolicited commercial email, or bulk communications that violate CAN-SPAM, CASL, or applicable anti-spam laws"],
            ["", "Harass, threaten, defraud, impersonate, or mislead any third party"],
            ["", "Process personal data without required legal basis, consent, or notice to data subjects"],
            ["", "Access or attempt to access systems, accounts, or data Client is not authorized to access"],
            ["", "Circumvent, disable, or interfere with Hirelessly's HITL controls, guardrails, or security features"],
            ["", "Use AI Agents in workflows involving children's data (COPPA-covered)"],
            ["", "Use AI Agents to generate, distribute, or promote illegal, harmful, or discriminatory content"],
            ["", "Resell or sublicense access to Hirelessly's services without prior written consent"],
            ["", "Reverse engineer, copy, or replicate Hirelessly's agent architecture, prompts, or configurations"],
            ["", "Use the Services in any way that violates applicable law in Client's jurisdiction"],
          ]} />
          <p style={prose}>Hirelessly reserves the right to suspend agents immediately upon discovering a violation of this AUP. Suspension under this section does not entitle Client to a refund.</p>
        </Section>

        {/* Section 12 */}
        <Section id="s12" num="Section 12" title="Term & Termination">
          <h3 style={sectionH3}>12.1 Term</h3>
          <p style={prose}>This Agreement begins on the date both Parties sign the first SOW and continues until all SOWs have expired or been terminated. Each SOW has a minimum initial term of <strong>3 months</strong>. After the initial term, the SOW auto-renews on a monthly basis.</p>
          <h3 style={sectionH3}>12.2 Termination for Convenience</h3>
          <p style={prose}>Either Party may terminate a SOW by providing <strong>30 days written notice</strong> after the initial 3-month term.</p>
          <h3 style={sectionH3}>12.3 Termination for Cause</h3>
          <Bullets items={[
            "Material breach not cured within 14 days of written notice",
            "Insolvency, assignment for benefit of creditors, or bankruptcy",
            "Violation of the Acceptable Use Policy (Section 11) or Policy Guardrails (Section 3)",
            "Payment more than 30 days overdue",
          ]} />
          <h3 style={sectionH3}>12.4 Effect of Termination</h3>
          <Bullets items={[
            "Revoke all OAuth tokens and API connections within 48 hours",
            "Deliver a final off-boarding summary including all agent configurations",
            "Issue a final invoice for any outstanding fees",
            "Delete or return Client Data within 30 days per Client's instructions",
          ]} />
        </Section>

        {/* Section 13 */}
        <Section id="s13" num="Section 13" title="Confidentiality">
          <p style={prose}>Each Party agrees to: (a) keep the other Party&apos;s Confidential Information strictly confidential; (b) use it only to perform obligations under this Agreement; and (c) share it only with employees or contractors who need to know and are bound by equivalent confidentiality obligations.</p>
          <p style={prose}>Confidentiality obligations survive termination of this Agreement for <strong>3 years</strong>, except for Client Data which is subject to the data deletion obligations in Section 5.7.</p>
        </Section>

        {/* Section 14 */}
        <Section id="s14" num="Section 14" title="Intellectual Property">
          <NumberedList items={[
            ["Client owns Client Data.", "All data, content, and information Client provides to Hirelessly remains Client's property. Hirelessly claims no ownership over Client Data."],
            ["Client owns outputs.", "Content generated by AI Agents on Client's behalf (emails drafted, reports generated, CRM entries created) belongs to Client."],
            ["Hirelessly owns its technology.", "Hirelessly's agent architecture, proprietary workflows, prompts, configuration methods, and technology platform remain Hirelessly's exclusive property."],
            ["Feedback license.", "If Client provides feedback or suggestions about the Services, Client grants Hirelessly a perpetual, royalty-free license to use that feedback to improve the Services."],
            ["No training on Client Data.", "Hirelessly will not use Client Data to train general-purpose AI models without Client's explicit written consent."],
          ]} />
        </Section>

        {/* Section 15 */}
        <Section id="s15" num="Section 15" title="General Provisions">
          <NumberedList items={[
            ["Governing Law.", "This Agreement is governed by the laws of the Kingdom of Thailand, without regard to conflict of law principles. Hirelessly Co., Ltd. is incorporated and operates from Bangkok, Thailand."],
            ["Dispute Resolution.", "The Parties agree to attempt to resolve disputes through good-faith negotiation for 30 days before initiating any legal proceeding. Any unresolved dispute will be submitted to binding arbitration under the rules of the Thai Arbitration Center (THAC) in Bangkok, Thailand."],
            ["Entire Agreement.", "This Agreement, together with all executed SOWs, constitutes the entire agreement between the Parties."],
            ["Amendments.", "Modifications to this MSA require written agreement signed by authorized representatives of both Parties."],
            ["Severability.", "If any provision is found unenforceable, the remaining provisions continue in full force."],
            ["Waiver.", "A Party's failure to enforce a provision is not a waiver of the right to enforce it later."],
            ["Assignment.", "Client may not assign this Agreement without Hirelessly's prior written consent. Hirelessly may assign to a successor entity with 30 days notice."],
            ["Force Majeure.", "Neither Party is liable for failure to perform due to causes beyond its reasonable control, including natural disasters, pandemics, or government actions."],
            ["Notices.", "Notices must be in writing and sent by email with confirmation of receipt, or by courier to the registered business address."],
            ["Independent Contractors.", "The Parties are independent contractors. Nothing creates an employment, partnership, joint venture, or agency relationship."],
            ["No Third-Party Beneficiaries.", "This Agreement is for the sole benefit of the Parties."],
          ]} />
        </Section>

        {/* Section 16 */}
        <Section id="s16" num="Section 16" title="Signature & Execution">
          <p style={prose}>By signing below, each Party confirms that they have read, understood, and agreed to this Master Service Agreement and that the individual signing has authority to bind the named entity.</p>
          <p style={prose}>This Agreement may be executed electronically. An electronic signature is legally binding under Thailand&apos;s Electronic Transactions Act B.E. 2544 (2001) and its amendments.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginTop: 32 }} className="sig-grid">
            {["Hirelessly Co., Ltd. — Service Provider", "Client — Business Entity"].map((label) => (
              <div key={label} style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 20 }}>{label}</div>
                {["Authorized Signature", "Printed Name & Title", "Date"].map((field) => (
                  <div key={field} style={{ marginBottom: 20 }}>
                    <div style={{ borderBottom: "1px solid var(--text-muted)", height: 32, marginBottom: 6 }} />
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{field}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Callout type="info" style={{ marginTop: 32 }}>
            <strong>Next Steps:</strong> After signing this MSA, a Statement of Work (SOW) will be prepared specifying your selected plan, agents, Authorized Tools, Delegation of Authority, and onboarding timeline. Services activate only upon execution of the SOW.
          </Callout>
          <p style={{ marginTop: 24, fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            <strong>Legal Notice:</strong> This document is a template prepared by Hirelessly for general guidance. It does not constitute legal advice. Hirelessly recommends that both Parties have this Agreement reviewed by qualified legal counsel before execution.
          </p>
        </Section>

      </div>

      <style>{`
        @media (min-width: 640px) {
          .sig-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}

// ---- Shared sub-components ----

const prose: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "var(--ink-muted)",
  lineHeight: 1.8,
  marginBottom: 16,
};

const sectionH2: React.CSSProperties = {
  fontSize: "1.375rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  letterSpacing: "-0.015em",
  fontFamily: "Roboto Condensed, sans-serif",
  marginBottom: 16,
};

const sectionH3: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  marginTop: 24,
  marginBottom: 10,
  fontFamily: "Roboto Condensed, sans-serif",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.875rem",
  margin: "16px 0",
};

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th style={{ background: "var(--surface-3)", padding: "10px 14px", textAlign: "left", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td style={{ padding: "10px 14px", border: "1px solid var(--border)", color: "var(--ink-muted)", verticalAlign: "top", fontSize: "0.875rem" }}>
      {children}
    </td>
  );
}

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ borderTop: "1px solid var(--border)", paddingTop: 40, marginTop: 40 }}>
      <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-primary)", marginBottom: 8 }}>{num}</div>
      <h2 style={sectionH2}>{title}</h2>
      {children}
    </div>
  );
}

function Callout({ type, children, style }: { type: "info" | "warning" | "danger"; children: React.ReactNode; style?: React.CSSProperties }) {
  const colors = {
    info: { bg: "rgba(139,143,255,0.08)", border: "#8B8FFF" },
    warning: { bg: "rgba(255,183,77,0.08)", border: "#FFB74D" },
    danger: { bg: "rgba(255,75,75,0.06)", border: "#FF4B4B" },
  };
  return (
    <div style={{ background: colors[type].bg, borderLeft: `3px solid ${colors[type].border}`, borderRadius: "0 8px 8px 0", padding: "14px 16px", margin: "16px 0", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--ink-muted)", ...style }}>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.65 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-primary)", flexShrink: 0, marginTop: 7, display: "block" }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: [string, string][] }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: "12px 0 16px", display: "flex", flexDirection: "column", gap: 10, counterReset: "list" }}>
      {items.map(([bold, text], i) => (
        <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.65 }}>
          <span style={{ flexShrink: 0, fontWeight: 700, color: "var(--brand-primary)", minWidth: 20 }}>{i + 1}.</span>
          <span>{bold && <strong style={{ color: "var(--text-primary)" }}>{bold} </strong>}{text}</span>
        </li>
      ))}
    </ol>
  );
}
