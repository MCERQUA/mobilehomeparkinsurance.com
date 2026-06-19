export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  features: string[];
  whoFor: string;
}

export const services: Service[] = [
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance Services",
    icon: "Building2",
    shortDesc:
      "Full-service property insurance placement for mobile home parks — from appraisal to claim advocacy.",
    description:
      "Contractors Choice Agency delivers end-to-end commercial property insurance services for manufactured housing community operators. We start with a comprehensive review of your current coverage, identify gaps and underinsurance issues, and place coverage with carriers who understand the unique valuation challenges of MHC property.\n\nOur service model includes professional replacement cost valuation support, carrier market comparison, policy negotiation, and proactive claims advocacy when losses occur. We maintain long-term relationships with carriers who specialize in the manufactured housing sector — relationships that translate into better coverage terms and more responsive claims handling for our clients.\n\nBeyond initial placement, we provide annual coverage reviews to ensure your insured values keep pace with construction cost inflation, and we work with you proactively to document risk improvements that can reduce your premium over time.",
    features: [
      "Replacement cost valuation review and appraisal coordination",
      "Multi-carrier market comparison and negotiation",
      "Underground utility coverage placement",
      "Park-owned home scheduling and management",
      "Annual coverage adequacy reviews",
      "Claims advocacy and adjuster coordination",
      "Construction cost inflation monitoring",
      "Risk improvement documentation for premium reduction",
    ],
    whoFor:
      "Mobile home park owners and operators seeking comprehensive property coverage that addresses the full spectrum of MHC property risks, including buildings, infrastructure, common areas, and park-owned homes.",
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance Services",
    icon: "Shield",
    shortDesc:
      "Specialized GL placement for park operators with the right endorsements, limits, and carrier expertise.",
    description:
      "General liability insurance for mobile home park operators requires more than a standard commercial GL form. Our team identifies the specific endorsements and coverage enhancements that MHC operators need — and the exclusions that standard policies include that can eliminate coverage when you need it most.\n\nWe place GL coverage with carriers experienced in the manufactured housing sector, negotiate appropriate limits based on your community's risk profile, and work with you to document risk management practices that support favorable underwriting. Our service includes annual limit adequacy reviews and proactive renewal management to prevent coverage disruptions.\n\nWhen claims occur, we provide claim reporting assistance and ongoing advocacy to ensure your insurer handles covered claims promptly and fairly. For disputed claims, we work with you to understand your rights under the policy and to escalate appropriately when necessary.",
    features: [
      "MHC-specific GL coverage placement",
      "Limit adequacy analysis based on community risk",
      "Exclusion review and endorsement negotiation",
      "Pool and recreational amenity coverage confirmation",
      "Claims reporting and initial advocacy",
      "Annual renewal management",
      "Risk management documentation support",
      "Coordination with umbrella carrier",
    ],
    whoFor:
      "All mobile home park operators who need general liability coverage that addresses the specific risks of residential community operations rather than generic commercial premises coverage.",
  },
  {
    slug: "loss-of-rents",
    title: "Loss of Rents Coverage Services",
    icon: "DollarSign",
    shortDesc:
      "Ensure your lot rent income is protected during covered losses with properly structured business income coverage.",
    description:
      "Loss of rents coverage is frequently undervalued and improperly structured for mobile home park operators. Our team works to ensure your business income coverage reflects your actual rental income, covers the realistic restoration timelines for your market, and coordinates properly with your property policy to eliminate gaps.\n\nWe review your current rental income documentation, calculate appropriate coverage limits, and select restoration period options that account for your local permitting environment and contractor market. We also review whether your policy includes extra expense coverage — funds for expedited repairs that reduce the total restoration period.\n\nAt claims time, loss of rents claims require careful documentation of pre-loss rental income, affected lot inventory, and repair timeline milestones. Our team assists with this documentation and works with property adjusters to ensure loss of rents claims are processed in tandem with property damage claims.",
    features: [
      "Rental income analysis and limit calculation",
      "Restoration period adequacy review",
      "Extra expense coverage placement",
      "Multi-lot loss scenario planning",
      "State rent abatement law review",
      "Claims documentation assistance",
      "Coordination with property and infrastructure claims",
      "Annual income-based limit updates",
    ],
    whoFor:
      "Mobile home park and manufactured housing community operators whose operating income depends on consistent lot rent collections and who need protection against income disruption from covered property losses.",
  },
  {
    slug: "flood-insurance",
    title: "Flood Insurance Services",
    icon: "Droplets",
    shortDesc:
      "Navigate NFIP requirements and private flood options to ensure your community has appropriate flood protection.",
    description:
      "Flood insurance for mobile home parks requires navigating the intersection of federal NFIP requirements, private market alternatives, and the unique valuation challenges of manufactured housing community infrastructure. Contractors Choice Agency has experience placing both NFIP coverage and private flood insurance for MHC operators across the country.\n\nOur flood insurance services begin with a review of your community's flood zone designation and an assessment of whether your current coverage (if any) is adequate for your exposure. We analyze whether NFIP limits are sufficient for your facilities or whether private flood coverage — with higher limits and broader terms — is the better option for your situation.\n\nFor communities that may be incorrectly mapped in high-risk flood zones, we can coordinate Letter of Map Amendment (LOMA) submissions to FEMA, which can significantly reduce or eliminate mandatory flood insurance requirements for federally-backed mortgages.",
    features: [
      "NFIP flood zone designation review",
      "NFIP policy placement and administration",
      "Private flood insurance comparison and placement",
      "LOMA coordination for zone correction",
      "Infrastructure and building valuation for flood coverage",
      "Business income/loss of rents flood endorsement",
      "Annual flood risk reassessment",
      "Claims support for flood events",
    ],
    whoFor:
      "Mobile home park operators in or near FEMA-designated flood zones, communities with federally-backed financing, and any MHC owner seeking protection against flood-related property losses regardless of flood zone designation.",
  },
  {
    slug: "umbrella-liability",
    title: "Umbrella Liability Coverage Services",
    icon: "Umbrella",
    shortDesc:
      "Structure your total liability program with appropriate umbrella limits above your primary coverage.",
    description:
      "Umbrella liability coverage is one of the most cost-effective risk management tools available to mobile home park operators, yet it is frequently omitted or undervalued. Our team will help you determine appropriate total liability limits — primary plus umbrella — based on your community's specific risk profile and the severity exposure that your amenities and operations create.\n\nWe place commercial umbrella coverage with carriers who write follow-form policies consistent with your underlying GL terms, ensuring no gaps between your primary and umbrella layers. We also review your umbrella policy's treatment of underlying auto liability and employer's liability to ensure complete coordination across your insurance program.\n\nFor large communities or those with significant amenities, we can structure layered umbrella programs providing $10 million or more in total liability protection at competitive aggregate premiums.",
    features: [
      "Total liability limit adequacy analysis",
      "Primary and umbrella coordination review",
      "Follow-form umbrella placement",
      "Multi-layer umbrella program structuring",
      "Auto and employer's liability coordination",
      "Annual limit reassessment",
      "Claims support above primary limits",
      "Carrier financial stability review",
    ],
    whoFor:
      "Mobile home park operators who recognize that their exposure to catastrophic liability claims — particularly from pool, playground, or serious fall incidents — may exceed their primary GL limits and who want meaningful protection for their personal and business assets.",
  },
  {
    slug: "workers-compensation",
    title: "Workers Compensation Services",
    icon: "HardHat",
    shortDesc:
      "Proper workers comp placement for park staff — maintenance, grounds, and office — with accurate classification.",
    description:
      "Workers compensation for mobile home park operations requires accurate employee classification to ensure both compliance and cost efficiency. Maintenance technicians, groundskeepers, and office staff each fall into different classification codes with different premium rates — and getting the classification right matters for both your premium and your audit outcome.\n\nContractors Choice Agency reviews your employee roster, job descriptions, and payroll to ensure accurate classification before policy inception. We compare rates across multiple carriers, select the carrier with the best combination of rate and service for your operation, and provide guidance on establishing a workplace safety program that can reduce your experience modification factor over time.\n\nWhen workplace injuries occur, we assist with claim reporting, work with your assigned adjuster to manage the claim efficiently, and provide guidance on return-to-work programs that reduce lost-time claim severity.",
    features: [
      "Employee classification audit and optimization",
      "Multi-carrier rate comparison",
      "Payroll audit preparation",
      "Workplace safety program guidance",
      "Experience modification factor review",
      "Claim reporting assistance",
      "Return-to-work program support",
      "Seasonal and part-time employee guidance",
    ],
    whoFor:
      "Any mobile home park or manufactured housing community that employs maintenance technicians, groundskeepers, office staff, or any other type of employee — full-time, part-time, or seasonal.",
  },
];
