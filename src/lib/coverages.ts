export interface Coverage {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  features: string[];
  whyNeed: string;
  whoNeedsIt: string;
}

export const coverages: Coverage[] = [
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    icon: "Building2",
    shortDesc:
      "Protect the buildings, infrastructure, and common area improvements that make your community run — from clubhouses to underground utilities.",
    description:
      "Commercial property insurance for mobile home parks and manufactured housing communities covers the physical assets that you own: common area buildings, utility infrastructure, recreational facilities, maintenance facilities, and any park-owned homes. Unlike residential homeowners insurance, commercial property coverage is designed around the scale and complexity of income-producing properties.\n\nThe right commercial property policy will cover your insurable assets at replacement cost — meaning what it actually costs to rebuild or replace, not the depreciated value. This distinction is critical for older communities where infrastructure replacement costs far exceed depreciated value. Contractors Choice Agency works with carriers that understand MHC property values and can structure coverage that won't leave you underinsured when you need it most.\n\nWe also ensure your policy explicitly covers underground utilities — water mains, sewer lines, electrical conduit, and gas distribution — which standard commercial policies frequently exclude. For most manufactured housing communities, underground infrastructure represents the single largest insurable asset and the most common source of significant uninsured losses.",
    features: [
      "Replacement cost coverage on all covered structures",
      "Common area buildings: clubhouse, laundry, office, maintenance",
      "Underground utility infrastructure coverage",
      "Park-owned home (POH) scheduling",
      "Swimming pool and recreational amenity coverage",
      "Recreational vehicle hookup infrastructure",
      "Business personal property (equipment, fixtures)",
      "Ordinance or law coverage for code upgrades after loss",
    ],
    whyNeed:
      "A single infrastructure failure — a water main break, a clubhouse fire, an electrical system failure — can cost hundreds of thousands of dollars to repair. Without adequate property coverage, that cost comes directly out of your operating income or reserves. Mobile home park property insurance ensures that a covered loss becomes an insurance claim rather than a business crisis.",
    whoNeedsIt:
      "Any mobile home park, manufactured housing community, RV park, or mixed-use residential community in which the operator owns and maintains shared infrastructure, common buildings, and utility systems.",
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    icon: "Shield",
    shortDesc:
      "Coverage for bodily injury and property damage claims from tenants, guests, and third parties arising from your park operations.",
    description:
      "General liability insurance is the foundation of every mobile home park operator's insurance program. It covers claims alleging that your negligence caused bodily injury or property damage to another person — whether that is a tenant who slipped on an icy walkway, a guest who was injured at your pool, or a third party whose property was damaged by a fire that spread from a common area.\n\nMobile home park general liability coverage must be structured to address the unique exposures of a residential community with shared infrastructure. Standard commercial GL policies written for office buildings or retail centers may contain exclusions that eliminate coverage for the most common MHC liability scenarios. A specialist policy covers slip-and-fall in common areas, utility failure-related tenant damage, recreational amenity injuries, and contractor-caused incidents.\n\nLimits matter as much as coverage. A $1 million per occurrence limit may be adequate for a small community, but larger parks — particularly those with pools, playgrounds, and high-traffic common areas — should carry $2 million to $5 million per occurrence, supplemented by an umbrella policy. Contractors Choice Agency will help you determine appropriate limits based on your community's specific risk profile.",
    features: [
      "Bodily injury and property damage liability",
      "Slip and fall in common areas",
      "Pool and recreational facility liability",
      "Utility failure-related tenant property damage",
      "Playground and amenity injury claims",
      "Defense costs included (separate from limits)",
      "Personal and advertising injury coverage",
      "Medical payments for minor injuries",
    ],
    whyNeed:
      "A single liability claim — a drowning at your pool, a serious fall on a poorly maintained walkway, or a utility failure that damages multiple homes — can easily exceed $1 million in damages and defense costs. Without GL coverage, a judgment or settlement could threaten the financial viability of your community.",
    whoNeedsIt:
      "All mobile home park and manufactured housing community owners and operators, regardless of community size. Liability exposure exists from the day you open the gates — and in many states, GL coverage is required for park licensing.",
  },
  {
    slug: "loss-of-rents",
    title: "Loss of Rents Coverage",
    icon: "DollarSign",
    shortDesc:
      "Replace lost lot rent income when a covered property loss prevents normal operations or renders lots uninhabitable.",
    description:
      "Loss of rents coverage — also called business income or rent loss insurance — is designed to replace the lot rent income you lose while your property is being repaired or restored after a covered loss. For mobile home park and manufactured housing community operators, this coverage is essential because a single infrastructure failure can affect dozens of income-producing lots at once.\n\nConsider the scenario: a water main collapse during a hard winter damages six lots and renders them uninhabitable. Repairs take four months. During that time, you may be legally required to abate those tenants' lot rent under your state's landlord-tenant laws. Loss of rents coverage replaces that income stream — six lots at your average monthly rent, for four months — during the repair period.\n\nProper loss of rents coverage includes an adequate waiting period (the time between the loss and when coverage kicks in, typically 72 hours) and a sufficient restoration period to cover realistic repair timelines. For significant infrastructure losses, repair periods can extend to 12-24 months, particularly in markets with permitting delays or contractor shortages. Ensure your policy's restoration period is realistic for your market.",
    features: [
      "Lot rent replacement during covered restoration periods",
      "Coverage for required rent abatements under state law",
      "Extended restoration period options up to 24 months",
      "Coverage for multi-lot simultaneous loss events",
      "Utility infrastructure outage coverage",
      "Business income loss from community facility closures",
      "Extra expense coverage for expedited repairs",
      "Coordination with property policy restoration timelines",
    ],
    whyNeed:
      "Your lot rent income is your operating revenue. When an infrastructure failure, storm, or fire forces you to abate rent for even a handful of lots for several months, the financial impact can be severe. Loss of rents coverage ensures that covered property losses do not also become operating income crises.",
    whoNeedsIt:
      "All income-producing mobile home park and manufactured housing community operators. Even communities with strong reserves benefit from loss of rents coverage, which preserves those reserves for planned capital investments rather than emergency income replacement.",
  },
  {
    slug: "flood-insurance",
    title: "Flood Insurance",
    icon: "Droplets",
    shortDesc:
      "Specialized flood coverage for mobile home parks and manufactured housing communities, including NFIP and private flood options.",
    description:
      "Flood is one of the most significant and most frequently uninsured risks facing mobile home park operators. Standard commercial property policies universally exclude flood damage — meaning that if rising water damages your infrastructure, community buildings, or park-owned homes, your commercial property policy will not respond. Separate flood insurance is required.\n\nThe National Flood Insurance Program (NFIP) provides federally-backed flood coverage up to $500,000 per building, with an additional $500,000 in contents coverage. For smaller community facilities in moderate flood-risk zones, NFIP coverage may be adequate. However, for larger or higher-value facilities, or for communities seeking higher limits, faster claims service, or broader coverage terms, private flood insurance is worth serious consideration.\n\nPrivate flood insurance has expanded dramatically in recent years, with carriers offering limits up to $10 million or more per location, coverage for business income loss from flood events, and broader definitions of covered flood damage. Contractors Choice Agency works with both NFIP program administrators and private flood carriers to find the right combination of coverage for your community's specific location and flood risk profile.",
    features: [
      "NFIP coverage placement and administration",
      "Private flood insurance with higher limits",
      "Coverage for community buildings and infrastructure",
      "Business income/loss of rents from flood events",
      "Basement and underground infrastructure coverage",
      "Flood zone designation review and LOMA assistance",
      "Coverage for park-owned homes and contents",
      "Debris removal and cleanup coverage",
    ],
    whyNeed:
      "Many mobile home parks were developed on land that carries flood risk — historically, flood-prone land was more affordable and thus more accessible for manufactured housing community development. A single flood event can cause catastrophic damage to infrastructure, community buildings, and park-owned homes, with losses that can run into the millions of dollars.",
    whoNeedsIt:
      "Any mobile home park or manufactured housing community located in a FEMA-designated Special Flood Hazard Area (SFHA) is required to carry flood insurance if it has a federally-backed mortgage. However, communities outside designated flood zones should also consider flood coverage — a significant percentage of flood claims come from properties outside mapped flood zones.",
  },
  {
    slug: "umbrella-liability",
    title: "Umbrella Liability Coverage",
    icon: "Umbrella",
    shortDesc:
      "Additional layers of liability protection above your primary GL limits — essential for larger communities and higher-risk amenities.",
    description:
      "Commercial umbrella liability insurance provides a layer of coverage above your primary general liability policy, responding once your primary limits are exhausted. For mobile home park and manufactured housing community operators, umbrella coverage is not a luxury — it is a necessity for any community with significant amenities, a large number of lots, or meaningful liability exposure.\n\nConsider that a serious drowning claim at a community pool can result in jury verdicts of $5 million or more. A premises liability claim from a catastrophic fall can exceed $2 million in combined damages and defense costs. Your primary GL policy — typically $1-2 million per occurrence — may not be sufficient to cover the full claim, leaving the excess judgment as your personal or business obligation without an umbrella policy.\n\nCommercial umbrella policies are typically written in $1 million increments and can stack multiple layers above your primary GL. They also typically follow-form — meaning they cover the same risks as your underlying GL policy — and may provide coverage for additional liability exposures not covered by your primary policy. Contractors Choice Agency routinely recommends $5-10 million in total liability limits (primary + umbrella) for community operators with swimming pools or other high-risk amenities.",
    features: [
      "Additional limits above primary GL ($1M-$10M options)",
      "Follow-form coverage consistent with underlying GL",
      "Coverage for catastrophic injury and death claims",
      "Protection over primary auto liability",
      "Defense costs above primary policy limits",
      "Coverage for cross-liability and co-defendant situations",
      "Worldwide coverage for US-based operations",
      "Favorable stacking over multiple underlying policies",
    ],
    whyNeed:
      "Jury verdicts in premises liability cases have escalated dramatically. A single catastrophic injury at your pool, playground, or common area could produce a verdict that dwarfs your primary GL limits. An umbrella policy is the most cost-effective way to protect your personal assets and business equity against these tail risks.",
    whoNeedsIt:
      "All mobile home park operators, with particular urgency for communities with swimming pools, playgrounds, ponds or water features, high-traffic common areas, or a history of liability claims. Communities with 50+ lots should carry at least $5 million in total liability limits.",
  },
  {
    slug: "workers-compensation",
    title: "Workers Compensation",
    icon: "HardHat",
    shortDesc:
      "Required coverage for park employees — maintenance technicians, groundskeepers, office staff — covering workplace injuries and illnesses.",
    description:
      "Workers compensation insurance is required by law in virtually every state for employers with employees. For mobile home park operators, workers comp covers medical costs, lost wages, and rehabilitation expenses for employees injured or made ill in the course of their employment. It also provides employer's liability coverage — protecting you from lawsuits by injured employees who claim that your negligence caused their injury.\n\nMobile home park maintenance and operations work carries real injury risk. Groundskeepers operate power equipment, climb ladders, and work in extreme weather. Maintenance technicians work with electrical systems, plumbing, and gas infrastructure. Office and management staff may be exposed to unhappy tenants or other workplace hazards. When a worker is injured on the job, workers comp ensures that their medical care is covered and that your business is protected from the financial consequences of a workplace injury.\n\nYour workers comp premium is calculated based on your employee payroll and the classification codes assigned to each type of work your employees do. Accurate classification is important — misclassification can result in either overpaying (if employees are in a higher-risk code than their actual work warrants) or audit penalties (if lower-risk codes are used for higher-risk work). Contractors Choice Agency will ensure your workers comp program is structured correctly from the start.",
    features: [
      "Medical expense coverage for workplace injuries",
      "Lost wage replacement for injured employees",
      "Vocational rehabilitation coverage",
      "Employer's liability protection",
      "Accurate payroll-based classification",
      "Covers maintenance, grounds, and office staff",
      "Experience modification review and management",
      "Coverage for seasonal and part-time employees",
    ],
    whyNeed:
      "Operating without workers compensation when you have employees is illegal in most states and can result in significant penalties, stop-work orders, and personal liability for employee injury claims. Even a single workplace injury — a maintenance technician falling from a ladder, a groundskeeper injured by power equipment — can result in costs that would be financially devastating without coverage.",
    whoNeedsIt:
      "Any mobile home park or manufactured housing community with employees — full-time, part-time, or seasonal. Even a single part-time groundskeeper or maintenance worker typically triggers the workers compensation requirement in most states.",
  },
];
