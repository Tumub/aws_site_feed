import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

type Translations = {
    hero: {
        title_suffix: string;
        headline: string;
        subheadline: string;
        integrated_areas: string;
        engagement_model: string;
        cta_primary: string;
        cta_secondary: string;
        engagement_label: string;
        oee_label: string;
        inventory_label: string;
        throughput_label: string;
        embedded_domains: string;
        telemetry_label: string;
        video_feed: string;
        signal_active: string;
        telemetry_loop: string;
    };
    app: {
        steps: {
            calibration: string;
            diagnostics: string;
            terrain: string;
            intel: string;
            identity: string;
        };
        spend: {
            question: string;
            opts: { label: string; value: string }[];
        };
        pain: {
            question: string;
            opts: { label: string; value: string }[];
        };
        it: {
            question: string;
            opts: { label: string; value: string }[];
        };
        context: {
            title: string;
            desc: string;
            placeholder: string;
            btn: string;
        };
        identity: {
            labels: { name: string; org: string; email: string; role: string };
            placeholders: { name: string; org: string; email: string; role: string };
            btn: string;
            disclaimer: string;
            summary_labels: { calibration: string; diagnostic: string; terrain: string };
        };
        rejection: {
            status: string;
            msg: string;
            btn: string;
        };
    };
    brownfield: {
        throughput: string;
        oee: string;
        optimized_flow: string;
        maintenance: string;
        drag_scan: string;
        complexity: string;
        labels: {
            physical: string;
            digital: string;
        };
    };
    stats: {
        oee: string;
        inventory: string;
        throughput: string;
        designs: string;
    };
    problem: {
        headline: string;
        body: string;
    };
    origin: {
        headline: string;
        story_p1: string;
        story_p2: string;
        story_p3: string;
        story_p4: string;
        founder_name: string;
        founder_title: string;
        execution_core_title: string;
        leader: { title: string; sub: string; desc: string };
        architect: { title: string; sub: string; desc: string };
        governance_title: string;
        advisor: { title: string; sub: string; desc: string };
        closing: string;
    };
    embedded: {
        philosophy: string;
    };
    trio: {
        headline: string;
        description: string;
        manufacturing: {
            title: string;
            subtitle: string;
            bullets: string[];
        };
        supply_chain: {
            title: string;
            subtitle: string;
            bullets: string[];
        };
        digital: {
            title: string;
            subtitle: string;
            bullets: string[];
        };
        finance: {
            title: string;
            subtitle: string;
            bullets: string[];
        };
    };
    timeline: {
        title: string;
        subtitle: string;
        step1: { title: string; desc: string };
        step2: { title: string; desc: string };
        step3: { title: string; desc: string };
        step4: { title: string; desc: string };
    };
    cases: {
        headline: string;
        subheadline: string;
        war_story_label: string;
        erp: { title: string; desc: string; metrics: string[] };
        inventory: { title: string; desc: string; metrics: string[] };
    };
    portfolio: {
        dossier_label: string;
        headline: string;
        subheadline: string;
        partners_title: string;
        partners: {
            supplyChain: {
                title: string;
                bio: string;
                badge: string;
                cases: { title: string; pub: string; auth: string }[];
            };
            manufacturing: {
                title: string;
                bio: string;
                badge: string;
                cases: { title: string; pub: string; auth: string }[];
            };
            digital: {
                title: string;
                bio: string;
                badge: string | null;
                cases: { title: string; pub: string; auth: string }[];
            };
        };
        curriculum_title: string;
        modules: string[];
        tech_stack_title: string;
        tech_categories: { label: string; items: string[] }[];
        security: {
            header: string;
            init_handshake: string;
            encrypted: string;
            awaiting: string;
            placeholder: string;
            status: { idle: string; checking: string; denied: string; granted: string };
            back_home: string;
            view_mode: string;
            authorized: string;
            public: string;
            lock_btn: string;
            unlock_btn: string;
        };
        redacted: string;
    };
    insights_page: {
        headline: string;
        subheadline: string;
        generate_btn: string;
        note_prefix: string;
        articles: { title: string; summary: string; tag: string }[];
    };
    insights: {
        label: string;
        headline: string;
        subheadline: string;
        supply_chain: { title: string; desc: string };
        manufacturing: { title: string; desc: string };
        digital: { title: string; desc: string };
    };
    engagement: {
        headline: string;
        risk_reversal: string;
        phase1_title: string;
        phase1_desc: string;
        phase1_bullets: string[];
        phase2_title: string;
        phase2_desc: string;
        phase2_bullets: string[];
        context_text: string;
        apply_btn: string;
    };
    contact: {
        direct_line: string;
        no_sdr: string;
        immediate_action: string;
        urgent_case: string;
        communications: string;
        inquiries: string;
        headquarters: string;
        location: string;
        priority_btn: string;
        priority_note: string;
    };
    nav: {
        core_expertise: string;
        our_approach: string;
        portfolio: string;
        insights: string;
        signal_check_btn: string;
    };
    footer: {
        tagline: string;
        copyright: string;
    };
    expertise_pages: {
        flow: ExpertisePageContent;
        physics: ExpertisePageContent;
        digital: ExpertisePageContent;
        finance: ExpertisePageContent;
    };
    case_study_pages: Record<string, CaseStudyContent>;
    not_found: {
        title: string;
        msg: string;
        home_btn: string;
    };
};

type CaseStudyContent = {
    title: string;
    subtitle: string;
    pillar: "Flow" | "Physics" | "Code" | "Capital";
    challenge: string;
    action: string;
    outcomes: string[];
    impactMetrics: { value: string; label: string }[];
};

type ExpertisePageContent = {
    hero_title: string;
    hero_subtitle: string;
    overview: string;
    capabilities_title: string;
    capabilities: string[];
    case_studies_title: string;
    case_studies: {
        title: string;
        challenge: string;
        action: string;
        outcome: string;
        slug?: string;
    }[];
    impact_metrics: string;
    cta_text: string;
};

const translations: Record<Language, Translations> = {
    en: {
        hero: {
            title_suffix: "TorqueFoundry | Forging Intelligence into Production",
            headline: "Strategy That Survives The Shopfloor.",
            subheadline: "We fuse Digital, Supply Chain, Manufacturing, and Finance to evolve your operations from within. No \"rip and replace.\" Just execution that withstands the reality of production.",
            integrated_areas: "Digital · Supply Chain · Manufacturing · Finance",
            engagement_model: "Co-investment, capital-protected diagnostics, shared upside.",
            cta_primary: "How Do We De-Risk Transformation?",
            cta_secondary: "OUR APPROACH",
            engagement_label: "Engagement Model",
            oee_label: "OEE",
            inventory_label: "Inventory",
            throughput_label: "Throughput",
            embedded_domains: "Embedded Domains",
            telemetry_label: "Live Factory Telemetry",
            video_feed: "/// Video feed: Factory floor · Overlay ready",
            signal_active: "SIGNAL: ACTIVE",
            telemetry_loop: "00:00:03 · LOOP"
        },
        app: {
            steps: {
                calibration: "Step 1: Calibration",
                diagnostics: "Step 2: Diagnostics",
                terrain: "Step 3: Terrain",
                intel: "Step 4: Intel",
                identity: "Step 5: Identity"
            },
            spend: {
                question: "What is your annual external spend (COGS + Indirect)?",
                opts: [
                    { label: "< $50M (Growth Stage)", value: "growth" },
                    { label: "$50M - $250M (Mid-Market)", value: "mid" },
                    { label: "$250M - $1B (Enterprise)", value: "ent" },
                    { label: "> $1B (Global Major)", value: "major" }
                ]
            },
            pain: {
                question: "Where is the primary bleeding edge?",
                opts: [
                    { label: "Manufacturing (OEE, Downtime, Quality)", value: "mfg" },
                    { label: "Supply Chain (Inventory, Freight, Service Levels)", value: "sc" },
                    { label: "Digital (ERP Data, Fragmented Systems, No Visibility)", value: "dig" },
                    { label: "All of the Above (Systemic Failure)", value: "all" }
                ]
            },
            it: {
                question: "What is your IT landscape reality?",
                opts: [
                    { label: "Modern Stack (Cloud ERP, Data Lake, APIs)", value: "modern" },
                    { label: "Mixed Reality (Legacy ERP + Ad-hoc SaaS)", value: "mixed" },
                    { label: "Legacy Heavy (On-prem, Mainframe, AS400)", value: "legacy" },
                    { label: "Spreadsheet Kingdom (Manual, Email-driven)", value: "excel" }
                ]
            },
            context: {
                title: "Operational Context",
                desc: "Describe the specific crisis or opportunity you are targeting. No fluff.",
                placeholder: "e.g. We are losing 12% OEE due to unexplained micro-stops in the packaging lines...",
                btn: "PROCEED TO IDENTITY"
            },
            identity: {
                labels: { name: "Name", org: "Organization", email: "Work Email", role: "Role" },
                placeholders: { name: "J. DOe", org: "ACME CORP", email: "j.doe@acmecorp.com", role: "COO / VP OPS" },
                btn: "TRANSMIT SIGNAL",
                disclaimer: "By transmitting, you acknowledge that TorqueFoundry Advisory will process this data for the purpose of a preliminary operational assessment.",
                summary_labels: { calibration: "SCALE", diagnostic: "VECTOR", terrain: "TERRAIN" }
            },
            rejection: {
                status: "SIGNAL REJECTED: GROWTH STAGE",
                msg: "TorqueFoundry protocols are optimized for complex brownfield operations with >$50M spend. Your current scale suggests a growth-stage setup that requires venture support rather than industrial transformation.",
                btn: "RETURN TO HOME"
            }
        },
        brownfield: {
            throughput: "THROUGHPUT",
            oee: "OEE",
            optimized_flow: "OPTIMIZED FLOW",
            maintenance: "MAINTENANCE REQUIRED",
            drag_scan: "DRAG TO SCAN",
            complexity: "See Through the Complexity",
            labels: {
                physical: "PHYSICAL ASSET (Legacy)",
                digital: "DIGITAL TWIN (Future)"
            }
        },
        stats: {
            oee: "Line availability increase in live pilots.",
            inventory: "Working capital unlocked in 12 months.",
            throughput: "No additional capex, just evolution.",
            designs: "We design the overlays, telemetry, and decision HUDs that sit on top of your reality."
        },
        problem: {
            headline: "Operations Don't Live In Slide Decks.",
            body: "Transformation doesn't fail because the strategy is wrong. It fails because execution can't survive the reality of the shopfloor: the heat, the dust, and the legacy constraints. Bridging this gap is urgent: research shows that 70% of transformations stall after design. We bridge that gap."
        },
        origin: {
            headline: "We Don't Advise. We Embed.",
            story_p1: "Across every plant, process, and project, one truth stood out: transformation doesn't fail because of bad strategy. It fails because strategy can't survive the real world. I've spent my career deep inside global manufacturing and industrial operations where Sweden's planning precision meets Turkey's execution speed and Switzerland's systems logic.",
            story_p2: "That’s why I built Torque Foundry Advisory—to close the gap between digital strategy and operational execution. We don't just consult. We embed. We work alongside your teams where it matters most: on the shop floor, in the systems, and across functions.",
            story_p3: "",
            story_p4: "",
            founder_name: "UMUT BAKIN",
            founder_title: "Founder & Managing Partner",
            execution_core_title: "THE EXECUTION SPINE",
            leader: {
                title: "EMRAH",
                sub: "Head of Production",
                desc: "Tough, grounded, and focused on performance. Emrah’s strength lies in translating strategic plans into action on the line. Shaped by high-pressure production environments, he makes sure every initiative survives the heat, dust, and pace of manufacturing reality."
            },
            architect: {
                title: "JOHAN",
                sub: "Chief Systems Architect",
                desc: "Johan connects old systems with new intelligence. From legacy machinery integration to real-time performance dashboards, he builds the architecture that turns raw data into smarter decisions and stronger execution."
            },
            governance_title: "STRATEGIC GOVERNANCE",
            advisor: {
                title: "ALPER PEKCAN",
                sub: "Board Advisor — Corporate Finance",
                desc: "Alper ensures financial alignment in operational transformation. As a seasoned strategist, he builds models that validate ROI and let us co-own risk with clients. He links the boardroom to the factory and long-term value to day-one impact."
            },
            closing: "This Is Industrial Execution Consulting, Rebuilt. Torque Foundry Advisory exists for one reason: to turn strategy into sustainable, scalable industrial results. Let’s turn strategy into motion."
        },
        embedded: {
            philosophy: "Embedded Philosophy"
        },
        trio: {
            headline: "How We Make Strategy Real",
            description: "Digital transformation in manufacturing isn’t about tech for tech’s sake. It’s about impact—faster throughput, better decision-making, and less friction between business units. That only happens when Digital, Supply Chain, Operations, and Finance move together.",
            manufacturing: {
                title: "Manufacturing",
                subtitle: "The Foundry: Optimization based on decades of floor experience.",
                bullets: ["Line diagnostics without stopping production", "Constraint-based debottlenecking", "Operator-centric UX for adoption"]
            },
            supply_chain: {
                title: "Supply Chain",
                subtitle: "The Flow: End-to-end procurement and logistics.",
                bullets: ["Network and lane redesign", "Inventory segmentation and buffers", "Control towers that operators actually use"]
            },
            digital: {
                title: "Digital Backbone",
                subtitle: "The Torque: AI-driven transformation within organically grown environments.",
                bullets: ["Data products on top of legacy stacks", "AI that respects process reality", "Secure, governed integration patterns", "Specialized diagnostics via VeriFix"]
            },
            finance: {
                title: "Finance",
                subtitle: "The Ledger: Business case validation and risk engineering.",
                bullets: ["Business case validation before spend", "Risk-sharing financial models", "Tax Optimization & Incentive Alignment"]
            }
        },
        timeline: {
            title: "Vertical System Integration Timeline",
            subtitle: "We don't sell a generic framework. We run a fixed protocol that ties your brownfield reality to a live Digital Backbone: from diagnostic through to P&L.",
            step1: { title: "Step 1 Deep-Dive Diagnostic", desc: "We map the messy reality of your brownfield site and quantify constraints before writing code." },
            step2: { title: "Step 2 The Blueprint", desc: "We design the digital overlay that fits your physical reality. No fantasy architectures. Only systems your floor can actually run." },
            step3: { title: "Step 3 Embedded Execution", desc: "We ship change from inside your operation. We don't hand off the plan. We code and configure alongside your team on the floor to upskill them in real-time." },
            step4: { title: "Step 4 Continuous Optimization", desc: "We keep optimising until the P&L reflects the change. We verify the ROI and tune the system as conditions shift, not just at quarter-end reviews." }
        },
        cases: {
            headline: "Nested, Not Just Near.",
            subheadline: "We don't just advise. We embed. We sit inside your stand-ups, shift handovers, and control towers, helping your teams change from within.",
            war_story_label: "War Story",
            erp: {
                title: "Migrating Legacy ERP without stopping the line.",
                desc: "Re-platformed core planning and execution from a 20-year-old ERP while maintaining service levels and OEE across three plants.",
                metrics: ["Schedule adherence improved from 71% to 80% in 6 months", "0 unscheduled line stops during cutover"]
            },
            inventory: {
                title: "Unlocking $145M in Inventory.",
                desc: "Segmented SKUs, redefined buffers, and synchronized procurement with true demand signals instead of spreadsheet heuristics.",
                metrics: ["-$145M net working capital", "+3.5 pts service improvement"]
            }
        },
        portfolio: {
            dossier_label: "Digital Dossier",
            headline: "Decoding the Impact.",
            subheadline: "No theory. No slides. Just realized P&L impact across Manufacturing, Supply Chain, and Digital.",
            partners_title: "Managing Partners",
            partners: {
                supplyChain: {
                    title: "Connecting Source to Customer",
                    bio: "15+ years managing 40,000+ shipments and >$790M in spend. Unified operations across 3 regions.",
                    badge: "Coupa Sourcing Excellence 2024",
                    cases: [
                        { title: "Major Automotive OEM CoE", pub: "Intercontinental Ops Center.", auth: "Created team of 34 from scratch. Unified 40k shipments/year across 3 regions." },
                        { title: "AI Track & Trace", pub: "GIT Reduction & Auto-Audit.", auth: "Reduced GIT by 125 MSEK (~$11M). 70% reduction in manual invoicing via AI milestones." },
                        { title: "Global Transport Sourcing", pub: "Coupa Optimization ($790M).", auth: "30% value improvement on $790M spend. Cycle time reduced 8mo → 4mo using 'Best Value' logic." },
                        { title: "Crisis Management", pub: "Covid Volume Surge.", auth: "Managed $1.2B spend during port lockdowns. Volume surged 596k → 638k TEU." },
                        { title: "DCSA Control Tower", pub: "Snowflake & API Integration.", auth: "Reduced carrier onboarding 6mo → 4 weeks using DCSA standards." },
                        { title: "Global Capacity Planning", pub: "Global Retailer Supplier Capacity.", auth: "Predicted stock-outs months in advance via monthly IBP cycles." },
                        { title: "Coupa Excellence 2024", pub: "Global Sourcing Award.", auth: "Best-in-class implementation for >$600M spend." }
                    ]
                },
                manufacturing: {
                    title: "Shop Floor Excellence",
                    bio: "19+ years delivering OEM-Ready Compliance (Leading German & Japanese OEMs) and Hidden Factory Optimization.",
                    badge: "IATF 16949 Lead Auditor",
                    cases: [
                        { title: "Chemical Optimization", pub: "Process & Recipe Optimization.", auth: "$1.5M Annual Savings via Six Sigma without compromising quality." },
                        { title: "The 'Invisible' Machine", pub: "Line Balancing (5 → 4 machines).", auth: "Eliminated €450K machine cost. Unlocked $1.0M capacity value." },
                        { title: "Greenfield Commissioning", pub: "4 Major Facility Setups.", auth: "Managed €5M+ investment. Plating & Extrusion plants (Auto & White Goods)." },
                        { title: "Solar Energy Revenue", pub: "Sustainability as Profit.", auth: "Generated $300k/year revenue via SPP installation." },
                        { title: "Market Entry Line", pub: "Kartepe White Goods Line.", auth: "Unlocked contracts with Major White Goods Manufacturers." }
                    ]
                },
                digital: {
                    title: "Agentic Automation & Architecture",
                    bio: "Bridging the gap between IT and business, driving AI transformation in legacy environments.",
                    badge: null as string | null, // Handling null in types is tricky here, will use string or empty
                    cases: [
                        { title: "Agentic Logistics", pub: "Swarm of AI Agents.", auth: "Replaced manual booking/verification with agents in legacy systems." },
                        { title: "Automated Underwriting", pub: "First Multi-Million AI in EU.", auth: "Moved from documents to information. Massive knowledge-bearing AI." },
                        { title: "Airline CX Transformation", pub: "Major European Airline.", auth: "Redesigned aftersales with AI bots. Improved UX & reduced workload." },
                        { title: "AI Self-Service", pub: "Insurance & Gov Automation.", auth: "Design lead for major Swiss insurer & German labor agency (DWP)." },
                        { title: "AI Center of Excellence", pub: "Automation Strategy.", auth: "Established CoE to drive automation from business, not IT." },
                        { title: "Automotive AI Strategy", pub: "Major German OEM.", auth: "Designed operational model embedded with automotive teams." }
                    ]
                }
            },
            curriculum_title: "Executive Curriculum",
            modules: [
                "From Control Tower Slides to Real-Time Operations",
                "Using DCSA & APIs to Clean Up Logistics Data",
                "Transforming Hidden Factories: The Lean Path",
                "From Tender Savings to Structural Cost Leadership"
            ],
            tech_stack_title: "Technical Stack",
            tech_categories: [
                { label: "DATA & CODE", items: ["Snowflake", "SQL", "Python", "C++", "Visual Basic", "R"] },
                { label: "VISIBILITY", items: ["Project44", "FourKites", "DCSA Standards", "SAP BN"] },
                { label: "ANALYTICS", items: ["Power BI", "Tableau", "Streamlit", "Qlik"] },
                { label: "CERTIFICATIONS", items: ["IATF 16949 Lead Auditor", "ISO 9001/14001/45001", "CPMAI", "Lean Six Sigma Black Belt", "PMP / Google Project Mgmt"] }
            ],
            security: {
                header: "Security Protocol V1.0",
                init_handshake: "> INITIATING HANDSHAKE...",
                encrypted: "> ENCRYPTED CONNECTION ESTABLISHED.",
                awaiting: "> AWAITING AUTHORIZATION CODE.",
                placeholder: "ENTER CODE",
                status: { idle: "AWAITING INPUT", checking: "VERIFYING HASH", denied: "ACCESS DENIED", granted: "ACCESS GRANTED /// UNLOCKING" },
                back_home: "← Back to Home",
                view_mode: "View Mode:",
                authorized: "AUTHORIZED",
                public: "PUBLIC",
                lock_btn: "LOCK DOSSIER",
                unlock_btn: "UNLOCK DATA"
            },
            redacted: "[REDACTED]"
        },
        insights_page: {
            headline: "Field Notes",
            subheadline: "LOGS FROM THE INDUSTRIAL FRONT LINE. NO FLUFF.",
            generate_btn: "Generate Full Report",
            note_prefix: "NOTE_",
            articles: [
                { title: "How to Avoid the Control Tower Mirage", summary: "Why spending $5M on a visual dashboard fails if your underlying data hygiene is trash. You cannot visualize what you cannot measure.", tag: "DIGITAL HYGIENE" },
                { title: "Why You Should Stop Waiting for Greenfield", summary: "The perfect factory doesn't exist. How to overlay AI onto 1980s PLCs and legacy ERPs without ripping out the nervous system.", tag: "BROWNFIELD REALITY" },
                { title: "How to Discover the Hidden Factory P&L", summary: "Your financial P&L lies. It hides the 'Shadow P&L' of rework, expedited freight, and manual Excel reconciliation. Here is how to audit it.", tag: "FINANCIAL FORENSICS" },
                { title: "When Merging the Frankenstein Works", summary: "A case study on merging three different ERPs over a holiday weekend using an API layer instead of a migration script.", tag: "SYSTEM ARCHITECTURE" },
                { title: "The Uncomfortable Truth About Cost Reduction", summary: "You can't cut cost by emailing suppliers for a 2% discount. You cut cost by aligning your inbound logic with your production takt time.", tag: "SUPPLY CHAIN PHYSICS" }
            ]
        },
        insights: {
            label: "SITUATION REPORT",
            headline: "The Signal.",
            subheadline: "Direct feed from our active engagements. No theory. Just what is breaking and what is working on the shopfloor right now.",
            supply_chain: { title: "Supply Chain", desc: "Global logistics patterns and network constraints." },
            manufacturing: { title: "Manufacturing", desc: "Shopfloor efficiency and OEE optimization techniques." },
            digital: { title: "Digital", desc: "System architecture and data integration strategies." }
        },
        engagement: {
            headline: "TOTAL ALIGNMENT OF INTERESTS.",
            risk_reversal: "Transformation shouldn't require blind faith. We deploy our expertise upfront to validate the business case before you commit your major budget. It's like a surgeon who only gets paid when the patient fully recovers, ensuring our success is aligned with your outcome.",
            phase1_title: "BUSINESS CASE VALIDATION",
            phase1_desc: "A deep-dive assessment across Digital, Supply Chain, Manufacturing, and Financial streams. We bear the initial cost to validate the upside first.",
            phase1_bullets: [
                "Fees: Performance-Vested (Unlocked only upon value confirmation)",
                "Cost: Direct expenses only",
                "Outcome: A validated Business Case"
            ],
            phase2_title: "OUTCOME-BASED REMUNERATION",
            phase2_desc: "We move to implementation only if the data justifies it. We transition into a model where our remuneration is linked to the value we create, ensuring our incentives are perfectly aligned with your P&L.",
            phase2_bullets: [
                "Fees tied to realized operational impact",
                "Shared upside / Gain-share mechanisms",
                "Embedded capability transfer"
            ],
            context_text: "This isn't a free workshop. It's a structured 'Gate-0' assessment where we put skin in the game. If the upside isn't there, you walk away with clarity—and zero sunk costs in consulting fees.",
            apply_btn: "START VALIDATION"
        },
        contact: {
            direct_line: "Direct Line.",
            no_sdr: "We do not employ sales development representatives. When you contact us, you speak directly to a Managing Partner.",
            immediate_action: "Immediate Action",
            urgent_case: "If you have a live operational crisis or require an immediate red-team assessment of a failing project:",
            communications: "Communications",
            inquiries: "Inquiries",
            headquarters: "Headquarters",
            location: "Basel, Switzerland",
            priority_btn: "Email Priority Channel",
            priority_note: "* Priority channel is monitored 24/7 by Partner level staff."
        },
        nav: {
            core_expertise: "Core Expertise",
            our_approach: "Our Approach",
            portfolio: "Portfolio",
            insights: "Insights",
            about: "About",
            signal_check_btn: "SYSTEM CONTROL"
        },
        footer: {
            tagline: "Basel, Switzerland · Industrial Digital Transformation",
            copyright: "© 2026 TorqueFoundry Advisory, Basel, Switzerland."
        },
        not_found: {
            title: "404",
            msg: "Oops! Page not found",
            home_btn: "Return to Home"
        },
        expertise_pages: {
            flow: {
                hero_title: "FLOW DYNAMICS: THE BACKBONE",
                hero_subtitle: "Supply Chain Optimization",
                overview: "In existing networks, visibility often ends where planning does. Carriers operate in isolation. Inventory is misplaced. Demand signals arrive late. We re-engineer how shipments flow, how capacity is allocated, and how working capital is utilized.",
                capabilities_title: "Capabilities",
                capabilities: ["Global freight sourcing and carrier optimization", "Control tower design and implementation (DCSA-compliant)", "Integrated business planning and predictive analytics"],
                case_studies_title: "Embedded Case Studies",
                case_studies: [
                    {
                        title: "Global Automotive OEM: Control Tower",
                        challenge: "Fragmented visibility across 3 regions, 40,000+ intercontinental shipments/year",
                        action: "Built intercontinental operations center with 34 FTEs, unified under single methodology",
                        outcome: "Single global view replacing 3 regional silos, zero major delays during launch",
                        slug: "global-control-tower"
                    },
                    {
                        title: "Large Retailer: Transportation Sourcing",
                        challenge: "$790M transportation spend with fragmented carrier portfolio, reactive selection",
                        action: "Led optimization using Coupa platform with 'Best Value' logic balancing cost and service",
                        outcome: "Tens of millions in savings, 30% value improvement, sourcing cycle cut from 8 to 4 months"
                    },
                    {
                        title: "Furniture Retailer: AI Track & Trace",
                        challenge: "High goods-in-transit inventory, manual invoice verification",
                        action: "Built DCSA-compliant data model with automated audit layer via Snowflake and APIs",
                        outcome: "GIT reduced by $11M, manual verification effort cut by 70%, real-time visibility achieved"
                    }
                ],
                impact_metrics: "$790M spend optimized | $11M working capital released | 40,000+ shipments unified | Sourcing cycle: 8→4 months",
                cta_text: "START SYSTEM CONTROL DIAGNOSTIC"
            },
            physics: {
                hero_title: "PRODUCTION PHYSICS: THE MUSCLE",
                hero_subtitle: "Production Excellence",
                overview: "In existing facilities, cycle times haven't changed, scrap rates remain 'acceptable,' and energy consumption is 'normal' — yet all conceal underlying inefficiencies. We integrate into your production lines to optimize physical processes and translate every improvement directly into P&L language.",
                capabilities_title: "Capabilities",
                capabilities: ["Cycle time optimization and line balancing", "Formula and process optimization (DOE, Six Sigma)", "New plant commissioning and OEE ramp-up"],
                case_studies_title: "Embedded Case Studies",
                case_studies: [
                    {
                        title: "Specialty Chemical Manufacturer: Formula Optimization",
                        challenge: "Rising production costs, non-negotiable quality standards, couldn't reduce inputs without risking batch failures",
                        action: "Embedded in production labs, performed complete formula optimization using DOE and Six Sigma",
                        outcome: "$1.5M annual savings, zero quality loss, all specifications maintained",
                        slug: "formula-optimization"
                    },
                    {
                        title: "High-Volume Manufacturer: Line Balancing",
                        challenge: "Unbalanced 5-machine line causing bottlenecks, planning a 6th machine",
                        action: "Line balancing diagnostics, workload re-sequencing, cycle time optimization",
                        outcome: "Eliminated need for 5th machine, avoided 6th. €450K capex avoided, $1.0M capacity unlocked"
                    },
                    {
                        title: "Industrial Manufacturer: Plant Commissioning",
                        challenge: "Over €5M capital investment in 4 new coating and extrusion plants requiring flawless startup",
                        action: "Led commissioning of 4 plants, managed equipment installation, process validation, OEE ramp-up",
                        outcome: "All commissioned on time, within OEE targets, zero major delays, zero quality escapes"
                    }
                ],
                impact_metrics: "$1.5M annual savings | €450K capex avoided | $1.0M capacity unlocked | 4 plants commissioned on time",
                cta_text: "START SYSTEM CONTROL DIAGNOSTIC"
            },
            digital: {
                hero_title: "DIGITAL ARCHITECTURE: THE BRAIN",
                hero_subtitle: "Digital Backbone",
                overview: "Your systems are old, entrenched, and critical. You can't shut them down for digital transformation. Instead, we enhance existing systems by adding intelligence layers to proven operational frameworks. We build AI agents, automation, and real-time decision-making that respect your legacy ERP, MES, and OT systems.",
                capabilities_title: "Capabilities",
                capabilities: ["AI-powered booking, validation, and logistics automation", "AI underwriting and decision engines", "AI governance, portfolio prioritization, and ROI frameworks"],
                case_studies_title: "Embedded Case Studies",
                case_studies: [
                    {
                        title: "Logistics Operator: AI-Powered Booking",
                        challenge: "Manual booking and shipment validation across fragmented legacy systems, inconsistent OTIF",
                        action: "Built AI automation replacing manual booking and carrier data validation",
                        outcome: "OTIF stabilized, manual touchpoints eliminated, no staff increase despite 30%+ volume growth",
                        slug: "ai-underwriting"
                    },
                    {
                        title: "EU Insurance: AI Underwriting Engine",
                        challenge: "Manual review bottleneck, slow underwriting, limited capacity",
                        action: "Developed first multi-million € AI underwriting engine in EU insurance market",
                        outcome: "Faster decisions, consistent risk assessment, full compliance maintained"
                    },
                    {
                        title: "Diversified Business: AI Governance",
                        challenge: "Disparate automation initiatives, no ROI visibility across fragmented AI projects",
                        action: "Established AI Center of Excellence with ROI-driven prioritization and KPI reporting",
                        outcome: "ROI visibility across 25+ initiatives, $2M saved by stopping underperforming ones"
                    }
                ],
                impact_metrics: "OTIF stabilized | $2M saved from underperformers | 25+ AI initiatives governed | Zero staff increase despite 30% volume growth",
                cta_text: "START SYSTEM CONTROL DIAGNOSTIC"
            },
            finance: {
                hero_title: "STRATEGIC FINANCE: THE NERVES",
                hero_subtitle: "Strategic Finance",
                overview: "Capital, when disconnected from operations, becomes a drag. We align finance with the factory floor — integrating treasury logic, liquidity strategies, and ROI governance directly into operational decision-making.",
                capabilities_title: "Capabilities",
                capabilities: ["Treasury management integrated with logistics flow", "Capex planning linked to production metrics and ROI", "Corporate restructuring and holding optimization"],
                case_studies_title: "Embedded Case Studies",
                case_studies: [
                    {
                        title: "Global Retailer: Treasury Management",
                        challenge: "Currency volatility and fragmented cross-regional liquidity",
                        action: "Integrated treasury management into logistics flow, implemented hedging and dynamic cash management",
                        outcome: "20% reduction in currency risk, $50M working capital unlocked, treasury forecasting synchronized with sourcing"
                    },
                    {
                        title: "Industrial OEM: Embedded Finance",
                        challenge: "Capex planning disconnected from operational metrics",
                        action: "Built predictive model linking machine utilization to ROI, integrated investment rationale with production data",
                        outcome: "30% reduction in inefficient capital, transparent ROI forecasting for CFO"
                    },
                    {
                        title: "Industrial Supplier: Corporate Restructuring",
                        challenge: "Rapidly growing supplier facing structural complexity and liquidity challenges",
                        action: "Led holding optimization, global tax strategy, and capital flow restructuring",
                        outcome: "$4M annual savings through structural tax efficiency, financial closing time reduced from 42 to 18 days"
                    }
                ],
                impact_metrics: "$50M working capital unlocked | $4M annual tax savings | 20% currency risk reduction | Closing time: 42→18 days",
                cta_text: "START SYSTEM CONTROL DIAGNOSTIC"
            }
        },
        case_study_pages: {
            "global-control-tower": {
                title: "Global Automotive OEM: Control Tower",
                subtitle: "How we unified 40,000+ intercontinental shipments across 3 regions under a single DCSA-compliant methodology.",
                pillar: "Flow",
                challenge: "The client faced fragmented visibility with regional silos managing logistics independently. This led to inconsistent data, reactive decision-making, and significant delays in high-stakes intercontinental launches.",
                action: "We designed and implemented an Intercontinental Operations Center, hiring and training 34 FTEs. We established a unified methodology and deployed a custom digital overlay on top of existing legacy systems to provide real-time visibility and predictive alerts.",
                outcomes: [
                    "Achieved a single global view for all shipments",
                    "Eliminated regional data silos",
                    "Ensured zero major delays during critical launch periods",
                    "Established standardized DCSA-compliant reporting across all regions"
                ],
                impactMetrics: [
                    { value: "40k+", label: "Shipments/Year" },
                    { value: "34", label: "FTEs Managed" },
                    { value: "0", label: "Critical Delays" },
                    { value: "100%", label: "Visibility" }
                ]
            },
            "formula-optimization": {
                title: "Chemical Manufacturer: Formula Optimization",
                subtitle: "Reducing production costs by $1.5M annually through Six Sigma and Design of Experiments without quality loss.",
                pillar: "Physics",
                challenge: "The manufacturer was facing rising input costs but could not reduce ingredients without risking batch failures and non-compliance with strict German quality standards.",
                action: "Our team embedded directly into the production labs. We utilized Design of Experiments (DOE) and Six Sigma methodologies to perform a complete formula optimization, identifying non-critical variables that could be adjusted for cost savings.",
                outcomes: [
                    "Identified $1.5M in recurring annual savings",
                    "Maintained 100% of quality specifications",
                    "Upskilled the internal lab team in DOE methodologies",
                    "Reduced batch variance by 12%"
                ],
                impactMetrics: [
                    { value: "$1.5M", label: "Annual Savings" },
                    { value: "0", label: "Quality Loss" },
                    { value: "12%", label: "Variance Reduction" },
                    { value: "6 Sigma", label: "Methodology" }
                ]
            },
            "ai-underwriting": {
                title: "EU Insurance: AI Underwriting Engine",
                subtitle: "Deploying the first multi-million Euro AI underwriting engine to eliminate bottlenecks and stabilize OTIF.",
                pillar: "Code",
                challenge: "Manual review of complex insurance documents was creating a massive bottleneck, limiting growth capacity and leading to inconsistent risk assessments across different teams.",
                action: "We developed and deployed a custom AI underwriting engine. Unlike generic LLMs, this was a specialized architecture designed for high-stakes financial compliance, integrating directly into the legacy core insurance platform.",
                outcomes: [
                    "Significantly faster decision cycles",
                    "Achieved 100% consistency in risk assessment protocols",
                    "Increased underwriting capacity without additional headcount",
                    "Fully compliant with EU insurance regulations"
                ],
                impactMetrics: [
                    { value: "OTIF", label: "Stabilized" },
                    { value: "100%", label: "Consistency" },
                    { value: "0", label: "Staff Increase" },
                    { value: "EU", label: "Compliant" }
                ]
            }
        },
    },
    tr: {
        hero: {
            title_suffix: "TorqueFoundry | Zekâyı Üretim Bandına İndiriyoruz",
            headline: "Sahada ayakta kalan strateji.",
            subheadline: "Dijital, Tedarik Zinciri ve Üretimi birleştirerek operasyonlarınızı içeriden dönüştürüyoruz. \"Söküp atma\" (rip and replace) yok. Sadece üretimin gerçekliğine dayanan bir icraat var.",
            integrated_areas: "Dijital · Tedarik Zinciri · Üretim Sistemleri",
            engagement_model: "Ortak yatırım, sermaye-korumalı değerlendirme, paylaşılan kazanç.",
            cta_primary: "Dönüşüm Riskini Nasıl Azaltırız?",
            cta_secondary: "YAKLAŞIMIMIZ",
            engagement_label: "Çalışma Modeli",
            oee_label: "OEE",
            inventory_label: "Stok",
            throughput_label: "Çıktı",
            embedded_domains: "Entegre Alanlar",
            telemetry_label: "Canlı Fabrika Telemetrisi",
            video_feed: "/// Video akışı: Fabrika sahası · Katman hazır",
            signal_active: "SİNYAL: AKTİF",
            telemetry_loop: "00:00:03 · DÖNGÜ"
        },
        app: {
            steps: {
                calibration: "Adım 1: Kalibrasyon",
                diagnostics: "Adım 2: Teşhis",
                terrain: "Adım 3: Arazi",
                intel: "Adım 4: İstihbarat",
                identity: "Adım 5: Kimlik"
            },
            spend: {
                question: "Yıllık dış harcamanız (SMM + Dolaylı) ne kadar?",
                opts: [
                    { label: "< 50M$ (Büyüme Aşaması)", value: "growth" },
                    { label: "50M$ - 250M$ (Orta Ölçek)", value: "mid" },
                    { label: "250M$ - 1B$ (Kurumsal)", value: "ent" },
                    { label: "> 1B$ (Küresel Büyük)", value: "major" }
                ]
            },
            pain: {
                question: "Birincil kanama noktası neresi?",
                opts: [
                    { label: "Üretim (OEE, Duruşlar, Kalite)", value: "mfg" },
                    { label: "Tedarik Zinciri (Stok, Navlun, Servis Seviyesi)", value: "sc" },
                    { label: "Dijital (ERP Verisi, Kopuk Sistemler, Görünürlük Yok)", value: "dig" },
                    { label: "Hepsi (Sistemik Arıza)", value: "all" }
                ]
            },
            it: {
                question: "BT peyzajı gerçekliğiniz nedir?",
                opts: [
                    { label: "Modern Yığın (Bulut ERP, Data Lake, API'lar)", value: "modern" },
                    { label: "Karma Gerçeklik (Eski ERP + Ad-hoc SaaS)", value: "mixed" },
                    { label: "Eski Ağırlıklı (On-prem, Mainframe, AS400)", value: "legacy" },
                    { label: "Excel Krallığı (Manuel, E-posta odaklı)", value: "excel" }
                ]
            },
            context: {
                title: "Operasyonel Bağlam",
                desc: "Hedeflediğiniz krizi veya fırsatı kısaca tanımlayın. Boş laf yok.",
                placeholder: "ör. Paketleme hatlarında açıklanamayan mikro duruşlar nedeniyle %12 OEE kaybediyoruz...",
                btn: "KİMLİK ADIMINA GEÇ"
            },
            identity: {
                labels: { name: "İsim", org: "Kurum", email: "İş E-postası", role: "Rol" },
                placeholders: { name: "A. Yılmaz", org: "ACME A.Ş.", email: "a.yilmaz@acme.com.tr", role: "COO / Üretim Direktörü" },
                btn: "SİNYALİ İLET",
                disclaimer: "İleterek, TorqueFoundry Advisory'nin bu verileri ön operasyonel değerlendirme amacıyla işlemesini kabul edersiniz.",
                summary_labels: { calibration: "ÖLÇEK", diagnostic: "VEKTÖR", terrain: "ARAZİ" }
            },
            rejection: {
                status: "SİNYAL REDDEDİLDİ: BÜYÜME AŞAMASI",
                msg: "TorqueFoundry protokolleri, >50M$ harcamaya sahip karmaşık brownfield operasyonları için optimize edilmiştir. Mevcut ölçeğiniz, endüstriyel dönüşümden ziyade girişim desteği gerektiren bir büyüme aşamasını işaret etmektedir.",
                btn: "ANA SAYFAYA DÖN"
            }
        },
        brownfield: {
            throughput: "ÇIKTI",
            oee: "OEE",
            optimized_flow: "OPTİMİZE AKIŞ",
            maintenance: "BAKIM GEREKLİ",
            drag_scan: "TARAMAK İÇİN SÜRÜKLE",
            complexity: "Karmaşıklığın Ötesini Görün",
            labels: {
                physical: "FİZİKSEL VARLIK (Eski)",
                digital: "DİJİTAL İKİZ (Gelecek)"
            }
        },
        stats: {
            oee: "Canlı pilotlarda hat kullanılabilirliği artışı.",
            inventory: "12 ayda açığa çıkan işletme sermayesi.",
            throughput: "Ek yatırım yok, sadece evrim.",
            designs: "Gerçekliğinizin üzerine oturan katmanları, telemetriyi ve karar ekranlarını tasarlıyoruz."
        },
        problem: {
            headline: "Operasyonlar Sunum Slaytlarında Yaşamaz.",
            body: "Dönüşüm, strateji yanlış olduğu için başarısız olmaz. İcraat, fabrika sahasının gerçekliğine (sıcağa, toza ve eski kısıtlara) dayanamadığı için başarısız olur. Bu boşluğu kapatmak acildir: araştırmalar, dönüşümlerin %70'inin tasarımdan sonra durduğunu gösteriyor. Biz o boşluğu kapatıyoruz."
        },
        origin: {
            headline: "Tavsiye Etmiyoruz. Entegre Oluyoruz.",
            story_p1: "Her fabrika, süreç ve projede bir gerçek öne çıktı: dönüşüm kötü strateji yüzünden başarısız olmaz. Strateji gerçek dünyada hayatta kalamadığı için başarısız olur. Kariyerimi, İsveç'in planlama hassasiyetinin, Türkiye'nin icraat hızıyla ve İsviçre'nin sistem mantığıyla buluştuğu küresel üretim operasyonlarının derinliklerinde geçirdim.",
            story_p2: "Bu yüzden Torque Foundry Advisory'i kurdum; dijital strateji ile operasyonel icraat arasındaki boşluğu kapatmak için. Sadece danışmanlık yapmıyoruz. Entegre oluyoruz. Ekiplerinizle omuz omuza, en önemli yerde çalışıyoruz: fabrika sahasında, sistemlerin içinde ve fonksiyonlar arasında.",
            story_p3: "",
            story_p4: "",
            founder_name: "UMUT BAKIN",
            founder_title: "Kurucu & Yönetici Ortak",
            execution_core_title: "İCRAAT OMURGASI",
            leader: {
                title: "EMRAH",
                sub: "Üretim Başkanı",
                desc: "Sert, yere basan ve performansa odaklı. Emrah'ın gücü, stratejik planları hattaki eyleme dönüştürmekte yatar. Yüksek baskılı üretim ortamlarında şekillenmiş olarak, her girişimin üretim gerçekliğinin sıcağına, tozuna ve hızına dayanmasını sağlar."
            },
            architect: {
                title: "JOHAN",
                sub: "Sistem Baş Mimarı",
                desc: "Johan eski sistemleri yeni zeka ile birleştirir. Eski makine entegrasyonundan gerçek zamanlı performans panellerine kadar, ham veriyi daha akıllı kararlara ve daha güçlü icraata dönüştüren mimariyi inşa eder."
            },
            governance_title: "STRATEJİK YÖNETİŞİM",
            advisor: {
                title: "ALPER PEKCAN",
                sub: "Yönetim Kurulu Danışmanı — Kurumsal Finans",
                desc: "Alper, operasyonel dönüşümde finansal hizalanmayı sağlar. Deneyimli bir stratejist olarak, ROI'yi doğrulayan ve riskleri müşterilerle ortaklaşa üstlenmemizi sağlayan modeller kurar. Yönetim kurulunu fabrikaya ve uzun vadeli değeri ilk günkü etkiye bağlar."
            },
            closing: "Bu, Yeniden İnşa Edilmiş Endüstriyel İcraat Danışmanlığıdır. Torque Foundry Advisory tek bir sebeple var: stratejiyi sürdürülebilir, ölçeklenebilir endüstriyel sonuçlara dönüştürmek için. Stratejiyi harekete geçirelim."
        },
        embedded: {
            philosophy: "Entegre Felsefe"
        },
        trio: {
            headline: "Stratejiyi Nasıl Gerçeğe Dönüştürüyoruz",
            description: "Üretimde dijital dönüşüm, teknoloji için teknoloji demek değildir. Etki demektir—daha hızlı çıktı, daha iyi karar alma ve iş birimleri arasında daha az sürtünme. Bu ancak Dijital, Tedarik Zinciri, Operasyonlar ve Finans birlikte hareket ettiğinde gerçekleşir.",
            manufacturing: {
                title: "Üretim",
                subtitle: "Dökümhane: Onlarca yıllık saha deneyimine dayalı optimizasyon.",
                bullets: ["Üretimi durdurmadan hat teşhisi", "Kısıt bazlı darboğaz giderme", "Benimseme için operatör odaklı UX"]
            },
            supply_chain: {
                title: "Tedarik Zinciri",
                subtitle: "Akış: Uçtan uca tedarik ve lojistik.",
                bullets: ["Ağ ve hat tasarımı", "Stok segmentasyonu ve tamponlar", "Operatörlerin gerçekten kullandığı kontrol kuleleri"]
            },
            digital: {
                title: "Dijital Omurga",
                subtitle: "Tork: Organik büyümüş ortamlarda yapay zeka destekli dönüşüm.",
                bullets: ["Eski yığınların üzerinde veri ürünleri", "Süreç gerçekliğine saygı duyan yapay zeka", "Güvenli, yönetilen entegrasyon desenleri", "VeriFix üzerinden özel teşhis hizmetleri"]
            },
            finance: {
                title: "Finans",
                subtitle: "Defter: İş modeli doğrulama ve risk mühendisliği.",
                bullets: ["Harcama öncesi iş modeli doğrulama", "Risk paylaşımlı finansal modeller", "Vergi Optimizasyonu & Teşvik Uyumu"]
            }
        },
        timeline: {
            title: "Dikey Sistem Entegrasyon Zaman Çizelgesi",
            subtitle: "Genel geçer bir çerçeve satmıyoruz. Brownfield gerçekliğinizi canlı bir Dijital Omurgaya bağlayan sabit bir protokol uyguluyoruz: teşhisten P&L'e kadar.",
            step1: { title: "Adım 1 Derinlemesine Teşhis", desc: "Kod yazmadan önce brownfield sahanızın dağınık gerçekliğini haritalandırıyor ve kısıtları nicelikselleştiriyoruz." },
            step2: { title: "Adım 2 Taslak (Blueprint)", desc: "Fiziksel gerçekliğinize uyan dijital katmanı tasarlıyoruz. Fantezi mimariler yok. Sadece sahanızın gerçekten çalıştırabileceği sistemler." },
            step3: { title: "Adım 3 Entegre İcraat", desc: "Değişimi operasyonunuzun içinden sevk ediyoruz. Planı teslim edip gitmiyoruz. Ekibinizle birlikte sahada kodluyor ve yapılandırıyoruz, onları gerçek zamanlı olarak geliştiriyoruz." },
            step4: { title: "Adım 4 Sürekli Optimizasyon", desc: "P&L değişimi yansıtana kadar optimize etmeye devam ediyoruz. Sadece çeyrek sonu değerlendirmelerinde değil, koşullar değiştikçe ROI'yi doğruluyor ve sistemi ayar yapıyoruz." }
        },
        cases: {
            headline: "Yakın Değil, İç içe.",
            subheadline: "Sadece tavsiye vermiyoruz. Entegre oluyoruz. Stand-up'larınızda, vardiya değişimlerinizde ve kontrol kulelerinizde oturuyor, ekiplerinizin içeriden değişmesine yardımcı oluyoruz.",
            war_story_label: "Saha Hikayesi",
            erp: {
                title: "Hattı durdurmadan Eski ERP Göçü.",
                desc: "Servis seviyelerini ve OEE'yi korurken, 20 yıllık bir ERP'den temel planlama ve yürütmeyi 3 fabrika genelinde yeniden platformladık.",
                metrics: ["6 ayda çizelge uyumu %71'den %80'e çıktı", "Geçiş sırasında 0 plansız hat duruşu"]
            },
            inventory: {
                title: "Stokta 145 Milyon $ Açığa Çıkarma.",
                desc: "SKU'ları segmentlere ayırdık, tamponları yeniden tanımladık ve tedariği e-tablo varsayımları yerine gerçek talep sinyalleriyle senkronize ettik.",
                metrics: ["-145 Milyon $ net işletme sermayesi", "+3.5 puan servis iyileştirmesi"]
            }
        },
        portfolio: {
            dossier_label: "Dijital Dosya",
            headline: "Etkiyi Deşifre Etmek.",
            subheadline: "Teori yok. Slayt yok. Üretim, Tedarik Zinciri ve Dijital genelinde gerçekleşen P&L etkisi.",
            partners_title: "Yönetici Ortaklar",
            partners: {
                supplyChain: {
                    title: "Kaynaktan Müşteriye Bağlantı",
                    bio: "40.000+ sevkiyatı ve >790M$ harcamayı 15+ yıl boyunca yönetti. 3 kıtada operasyonları birleştirdi.",
                    badge: "Coupa Satın Alma Mükemmelliği 2024",
                    cases: [
                        { title: "Otomotiv OEM CoE", pub: "Kıtalararası Ops Merkezi.", auth: "Sıfırdan 34 kişilik ekip kurdu. 3 bölgede yıllık 40k sevkiyatı birleştirdi." },
                        { title: "Yapay Zeka İzleme", pub: "GIT Azaltma & Oto-Denetim.", auth: "GIT'i 125 MSEK (~11M$) azalttı. AI kilometre taşlarıyla manuel faturalamada %70 azalma." },
                        { title: "Küresel Nakliye Kaynağı", pub: "Coupa Optimizasyonu (790M$).", auth: "790M$ harcamada %30 değer artışı. 'En İyi Değer' mantığıyla döngü süresini 8 aydan 4 aya indirdi." },
                        { title: "Kriz Yönetimi", pub: "Covid Hacim Dalgası.", auth: "Liman kapanmalarında 1.2M$ harcamayı yönetti. Hacim 596k'dan 638k TEU'ya fırladı." },
                        { title: "DCSA Kontrol Kulesi", pub: "Snowflake & API Entegrasyonu.", auth: "DCSA standartlarını kullanarak taşıyıcı katılımını 6 aydan 4 haftaya indirdi." },
                        { title: "Küresel Kapasite Planlama", pub: "Perakendeci Tedarikçi Kapasitesi.", auth: "Aylık IBP döngüleri ile stok tükenmelerini aylar önceden öngördü." },
                        { title: "Coupa Mükemmelliği 2024", pub: "Küresel Kaynak Kullanımı Ödülü.", auth: ">600M$ harcama için sınıfının en iyisi uygulama." }
                    ]
                },
                manufacturing: {
                    title: "Fabrika Sahası Mükemmelliği",
                    bio: "19+ yıllık OEM-Hazır Uyumluluk (Önde gelen Alman & Japon OEM'leri) ve Gizli Fabrika Optimizasyonu deneyimi.",
                    badge: "IATF 16949 Baş Denetçi",
                    cases: [
                        { title: "Kimyasal Optimizasyon", pub: "Süreç & Reçete Optimizasyonu.", auth: "Kaliteden ödün vermeden Altı Sigma ile Yıllık 1.5M$ Tasarruf." },
                        { title: "Görünmez Makine", pub: "Hat Dengeleme (5 → 4 makine).", auth: "450K € makine maliyetini elimine etti. 1.0M$ kapasite değeri açığa çıkardı." },
                        { title: "Greenfield Devreye Alma", pub: "4 Büyük Tesis Kurulumu.", auth: "5M €+ yatırımı yönetti. Kaplama & Ekstrüzyon tesisleri (Oto & Beyaz Eşya)." },
                        { title: "Güneş Enerjisi Geliri", pub: "Kâr Olarak Sürdürülebilirlik.", auth: "SPP kurulumu ile yılda 300k$ gelir yarattı." },
                        { title: "Pazar Giriş Hattı", pub: "Kartepe Beyaz Eşya Hattı.", auth: "Büyük Beyaz Eşya Üreticileriyle sözleşmelerin kilidini açtı." }
                    ]
                },
                digital: {
                    title: "Ajan Bazlı Otomasyon & Mimari",
                    bio: "BT ve iş dünyası arasındaki boşluğu doldurarak, eski ortamlarda yapay zeka dönüşümünü yönlendiriyor.",
                    badge: null,
                    cases: [
                        { title: "Ajan Bazlı Lojistik", pub: "Yapay Zeka Ajan Sürüsü.", auth: "Eski sistemlerde manuel rezervasyon/doğrulamayı ajanlarla değiştirdi." },
                        { title: "Otomatik Sigortalama", pub: "AB'de İlk Çok Milyonluk YZ.", auth: "Belgelerden bilgiye geçiş. Devasa bilgi taşıyan YZ." },
                        { title: "Havayolu CX Dönüşümü", pub: "Büyük Avrupa Havayolu.", auth: "Satış sonrasını YZ botlarıyla yeniden tasarladı. UX iyileştirildi & iş yükü azaldı." },
                        { title: "YZ Self-Servis", pub: "Sigorta & Devlet Otomasyonu.", auth: "Büyük İsviçre sigortacısı & Alman iş kurumu (DWP) için tasarım lideri." },
                        { title: "YZ Mükemmeliyet Merkezi", pub: "Otomasyon Stratejisi.", auth: "Otomasyonu BT'den değil, iş biriminden yönlendirmek için CoE kurdu." },
                        { title: "Otomotiv YZ Stratejisi", pub: "Büyük Alman OEM.", auth: "Otomotiv ekiplerine gömülü operasyonel model tasarladı." }
                    ]
                }
            },
            curriculum_title: "Yönetici Müfredatı",
            modules: [
                "Kontrol Kulesi Slaytlarından Gerçek Zamanlı Operasyona",
                "Lojistik Verisini Temizlemek için DCSA & API Kullanımı",
                "Gizli Fabrikaları Dönüştürmek: Yalın (Lean) Yol",
                "İhale Tasarrufundan Yapısal Maliyet Liderliğine"
            ],
            tech_stack_title: "Teknik Yığın",
            tech_categories: [
                { label: "VERİ & KOD", items: ["Snowflake", "SQL", "Python", "C++", "Visual Basic", "R"] },
                { label: "GÖRÜNÜRLÜK", items: ["Project44", "FourKites", "DCSA Standartları", "SAP BN"] },
                { label: "ANALİTİK", items: ["Power BI", "Tableau", "Streamlit", "Qlik"] },
                { label: "SERTİFİKATLAR", items: ["IATF 16949 Baş Denetçi", "ISO 9001/14001/45001", "CPMAI", "Lean Six Sigma Black Belt", "PMP / Google Proje Yön."] }
            ],
            security: {
                header: "Güvenlik Protokolü V1.0",
                init_handshake: "> EL SIKIŞMA BAŞLATILIYOR...",
                encrypted: "> ŞİFRELİ BAĞLANTI KURULDU.",
                awaiting: "> YETKİ KODU BEKLENİYOR.",
                placeholder: "KOD GİRİN",
                status: { idle: "GİRİŞ BEKLENİYOR", checking: "HASH DOĞRULANIYOR", denied: "ERİŞİM REDDEDİLDİ", granted: "ERİŞİM ONAYLANDI /// KİLİT AÇILIYOR" },
                back_home: "← Ana Sayfaya Dön",
                view_mode: "Görünüm Modu:",
                authorized: "YETKİLİ",
                public: "KAMUSAL",
                lock_btn: "DOSYAYI KİLİTLE",
                unlock_btn: "VERİYİ AÇ"
            },
            redacted: "[GİZLENMİŞTİR]"
        },
        insights_page: {
            headline: "Saha Notları",
            subheadline: "ENDÜSTRİYEL CEPHEDEN KAYITLAR. BOŞ LAF YOK.",
            generate_btn: "Tam Raporu Oluştur",
            note_prefix: "NOT_",
            articles: [
                { title: "Kontrol Kulesi Serabı", summary: "Temel veri hijyeniniz çöp ise görsel bir paneli 5 Milyon dolara mal etmek neden başarısız olur? Ölçemediğinizi görselleştiremezsiniz.", tag: "DİJİTAL HİJYEN" },
                { title: "Yeşil Alan (Greenfield) Beklemeyi Bırakın", summary: "Mükemmel fabrika yoktur. Sinir sistemini söküp atmadan 1980'lerin PLC'lerine ve eski ERP'lere yapay zeka nasıl entegre edilir.", tag: "BROWNFIELD GERÇEKLİĞİ" },
                { title: "Gizli Fabrika P&L'i", summary: "Finansal P&L'iniz yalan söylüyor. Yeniden işleme (rework), acil navlun ve manuel Excel mutabakatlarının 'Gölge P&L'ini gizliyor. İşte bunu nasıl denetleyebileceğiniz.", tag: "FİNANSAL ADLİ TIP" },
                { title: "Frankenstein'ı Birleştirmek", summary: "Bir API katmanı kullanarak (göç senaryosu kullanmadan) bir tatil hafta sonunda üç farklı ERP'yi birleştirme üzerine bir vaka çalışması.", tag: "SİSTEM MİMARİSİ" },
                { title: "Maliyet Azaltma Hakkındaki Rahatsız Edici Gerçek", summary: "Tedarikçilere %2 indirim için e-posta atarak maliyeti düşüremezsiniz. Maliyeti, gelen mantığınızı (inbound logic) üretim takt zamanınızla hizalayarak düşürürsünüz.", tag: "TEDARİK ZİNCİRİ FİZİĞİ" }
            ]
        },
        insights: {
            label: "DURUM RAPORU",
            headline: "Sinyal.",
            subheadline: "Aktif projelerimizden doğrudan veri akışı. Teori yok. Sadece sahada şu anda neyin bozulduğu ve neyin çalıştığı.",
            supply_chain: { title: "Tedarik Zinciri", desc: "Küresel lojistik desenleri ve ağ kısıtları." },
            manufacturing: { title: "Üretim", desc: "Saha verimliliği ve OEE optimizasyon teknikleri." },
            digital: { title: "Dijital", desc: "Sistem mimarisi ve veri entegrasyon stratejileri." }
        },
        engagement: {
            headline: "ÇIKARLARIN TAM HİZALANMASI.",
            risk_reversal: "Dönüşüm körü körüne inanç gerektirmemeli. Büyük bütçenizi taahhüt etmeden önce iş modelini (business case) doğrulamak için uzmanlığımızı önden sunuyoruz. Tıpkı hasta tamamen iyileştiğinde ödeme alan bir cerrah gibi, başarımızın sizin sonucunuza bağlı olmasını sağlıyoruz.",
            phase1_title: "İŞ MODELİ DOĞRULAMA",
            phase1_desc: "Dijital, Tedarik Zinciri, Üretim ve Finansal akışlarda derinlemesine bir değerlendirme. Potansiyeli doğrulamak için ilk maliyeti biz üstleniyoruz.",
            phase1_bullets: [
                "Ücretler: Performansa Dayalı (Yalnızca değer onaylandığında açılır)",
                "Maliyet: Sadece doğrudan masraflar",
                "Sonuç: Doğrulanmış Bir İş Modeli"
            ],
            phase2_title: "SONUÇ ODAKLI ÜCRETLENDİRME",
            phase2_desc: "Uygulamaya ancak veriler bunu haklı çıkarırsa geçeriz. Ücretlendirmemizin yarattığımız değere endeksli olduğu bir modele geçerek teşviklerimizin P&L'inizle mükemmel şekilde hizalanmasını sağlarız.",
            phase2_bullets: [
                "Gerçekleşen operasyonel etkiye bağlı ücretler",
                "Paylaşılan kazanç / Gain-share mekanizmaları",
                "Gömülü yetkinlik transferi"
            ],
            context_text: "Bu ücretsiz bir çalıştay değildir. Her iki tarafın da elini taşın altına koyduğu yapılandırılmış bir 'Gate-0' değerlendirmesidir. Eğer potansiyel (upside) orada değilse, netlikle ayrılırsınız; ve danışmanlık ücretlerinde sıfır batık maliyetiniz olur.",
            apply_btn: "DOĞRULAMAYI BAŞLAT"
        },
        contact: {
            direct_line: "Doğrudan hat.",
            no_sdr: "SDR kullanmıyoruz. Bize yazdığınızda doğrudan bir Yönetici Ortak ile konuşursunuz.",
            immediate_action: "Acil Eylem",
            urgent_case: "Canlı bir operasyonel kriziniz varsa veya başarısız bir proje için acil \"Kırmızı Takım\" değerlendirmesi gerekiyorsa:",
            communications: "İletişim",
            inquiries: "Sorgular",
            headquarters: "Merkez",
            location: "Basel, İsviçre",
            priority_btn: "Öncelikli Kanal E-postası",
            priority_note: "* Öncelikli kanal 7/24 Ortak seviyesindeki personel tarafından izlenmektedir."
        },
        nav: {
            core_expertise: "Uzmanlık Alanlarımız",
            our_approach: "Yaklaşımımız",
            portfolio: "Portföyümüz",
            insights: "İçgörüler",
            about: "Hakkımızda",
            signal_check_btn: "SİSTEM KONTROL"
        },
        footer: {
            tagline: "Basel, İsviçre · Endüstriyel Dijital Dönüşüm",
            copyright: "© 2026 TorqueFoundry Advisory, Basel, İsviçre."
        },
        not_found: {
            title: "404",
            msg: "Eyvah! Sayfa bulunamadı",
            home_btn: "Ana Sayfaya Dön"
        },
        expertise_pages: {
            flow: {
                hero_title: "AKIŞ DİNAMİKLERİ: OMURGA",
                hero_subtitle: "Tedarik Zinciri Optimizasyonu",
                overview: "Mevcut ağlarda görünürlük genellikle planlamanın bittiği yerde sona erer. Taşıyıcılar yalıtılmış halde çalışır. Stoklar yanlış yerleştirilir. Talep sinyalleri geç ulaşır. Sevkiyatların akışını, kapasite tahsisini ve işletme sermayesinin kullanımını yeniden yapılandırıyoruz.",
                capabilities_title: "Yetkinlikler",
                capabilities: ["Küresel navlun tedariği ve taşıyıcı optimizasyonu", "Kontrol kulesi tasarımı ve uygulaması (DCSA uyumlu)", "Entegre iş planlaması ve öngörücü analitik"],
                case_studies_title: "Gömülü Vaka Çalışmaları",
                case_studies: [
                    {
                        title: "Küresel Otomotiv OEM: Kontrol Kulesi",
                        challenge: "3 bölgede parçalı görünürlük, yıllık 40.000+ kıtalararası sevkiyat",
                        action: "34 FTE ile kıtalararası operasyon merkezi kuruldu, tek metodoloji altında birleştirildi",
                        outcome: "3 bölgesel silonun yerini alan tek küresel görünüm, lansman sırasında sıfır büyük gecikme",
                        slug: "global-control-tower"
                    },
                    {
                        title: "Büyük Perakendeci: Nakliye Tedariği",
                        challenge: "Parçalı taşıyıcı portföyü ve reaktif seçim ile 790M$ nakliye harcaması",
                        action: "Coupa platformu kullanılarak maliyet ve hizmeti dengeleyen 'En İyi Değer' mantığıyla optimizasyon yönetildi",
                        outcome: "On milyonlarca dolar tasarruf, %30 değer iyileştirmesi, tedarik döngüsü 8 aydan 4 aya indirildi"
                    },
                    {
                        title: "Mobilya Perakendecisi: YZ İzleme ve Takip",
                        challenge: "Yüksek yoldaki stok (GIT), manuel fatura doğrulama",
                        action: "Snowflake ve API'ler üzerinden otomatik denetim katmanı ile DCSA uyumlu veri modeli oluşturuldu",
                        outcome: "GIT 11 milyon $ azaltıldı, manuel doğrulama eforu %70 kesildi, gerçek zamanlı görünürlük sağlandı"
                    }
                ],
                impact_metrics: "790M$ harcama optimize edildi | 11M$ işletme sermayesi serbest kaldı | 40.000+ sevkiyat birleştirildi | Tedarik döngüsü: 8→4 ay",
                cta_text: "SİSTEM KONTROL TEŞHİSİNİ BAŞLAT"
            },
            physics: {
                hero_title: "ÜRETİM FİZİĞİ: KAS",
                hero_subtitle: "Üretim Mükemmelliği",
                overview: "Mevcut tesislerde çevrim süreleri değişmemiş, fire oranları 'kabul edilebilir' kalmış ve enerji tüketimi 'normal' görünmektedir; ancak bunların tümü altta yatan verimsizlikleri gizler. Fiziksel süreçleri optimize etmek ve her iyileştirmeyi doğrudan P&L diline çevirmek için üretim hatlarınıza entegre oluyoruz.",
                capabilities_title: "Yetkinlikler",
                capabilities: ["Çevrim süresi optimizasyonu ve hat dengeleme", "Reçete ve süreç optimizasyonu (DOE, Altı Sigma)", "Yeni tesis devreye alma ve OEE ramp-up"],
                case_studies_title: "Gömülü Vaka Çalışmaları",
                case_studies: [
                    {
                        title: "Özel Kimya Üreticisi: Reçete Optimizasyonu",
                        challenge: "Artan üretim maliyetleri, tavizsiz kalite standartları, parti başarısızlığı riski nedeniyle girdiler azaltılamıyordu",
                        action: "Üretim laboratuvarlarına entegre olundu, DOE ve Altı Sigma kullanılarak tam reçete optimizasyonu yapıldı",
                        outcome: "Yıllık 1.5M$ tasarruf, sıfır kalite kaybı, tüm spesifikasyonlar korundu",
                        slug: "formula-optimization"
                    },
                    {
                        title: "Yüksek Hacimli Üretici: Hat Dengeleme",
                        challenge: "Darboğazlara neden olan dengesiz 5 makineli hat, 6. makine planlanıyordu",
                        action: "Hat dengeleme teşhisi, iş yükü yeniden sıralama, çevrim süresi optimizasyonu",
                        outcome: "5. makine ihtiyacı ortadan kalktı, 6. makineden kaçınıldı. 450 bin € yatırım (capex) tasarrufu, 1.0M$ kapasite değeri açıldı"
                    },
                    {
                        title: "Endüstriyel Üretici: Tesis Devreye Alma",
                        challenge: "Kusursuz başlangıç gerektiren 4 yeni kaplama ve ekstrüzyon tesisinde 5 milyon € üzerinde sermaye yatırımı",
                        action: "4 tesisin devreye alınması yönetildi, ekipman kurulumu, süreç doğrulaması, OEE ramp-up koordine edildi",
                        outcome: "Tümü zamanında, OEE hedefleri dahilinde devreye alındı, sıfır büyük gecikme, sıfır kalite hatası"
                    }
                ],
                impact_metrics: "Yıllık 1.5M$ tasarruf | 450 bin € yatırım tasarrufu | 1.0M$ kapasite açıldı | 4 tesis zamanında devreye alındı",
                cta_text: "SİSTEM KONTROL TEŞHİSİNİ BAŞLAT"
            },
            digital: {
                hero_title: "DİJİTAL MİMARİ: BEYİN",
                hero_subtitle: "Dijital Omurga",
                overview: "Sistemleriniz eski, yerleşik ve kritiktir. Dijital dönüşüm için onları kapatamazsınız. Bunun yerine, kanıtlanmış operasyonel çerçevelere zeka katmanları ekleyerek mevcut sistemleri geliştiriyoruz. Eski ERP, MES ve OT sistemlerinize saygı duyan YZ ajanları, otomasyon ve gerçek zamanlı karar verme mekanizmaları inşa ediyoruz.",
                capabilities_title: "Yetkinlikler",
                capabilities: ["YZ destekli rezervasyon, doğrulama ve lojistik otomasyonu", "YZ sigortalama ve karar motorları", "YZ yönetişimi, portföy önceliklendirme ve ROI çerçeveleri"],
                case_studies_title: "Gömülü Vaka Çalışmaları",
                case_studies: [
                    {
                        title: "Lojistik Operatörü: YZ Destekli Rezervasyon",
                        challenge: "Parçalı eski sistemlerde manuel rezervasyon ve sevkiyat doğrulaması, tutarsız OTIF",
                        action: "Manuel rezervasyon ve taşıyıcı veri doğrulamasının yerini alan YZ otomasyonu kuruldu",
                        outcome: "OTIF stabilize edildi, manuel temas noktaları elendi, %30+ hacim artışına rağmen personel artışı gerekmedi"
                    },
                    {
                        title: "AB Sigorta: YZ Sigortalama Motoru",
                        challenge: "Manuel inceleme darboğazı, yavaş sigortalama, sınırlı kapasite",
                        action: "AB sigorta pazarındaki ilk çok milyon €'luk YZ sigortalama motoru geliştirildi",
                        outcome: "Daha hızlı kararlar, tutarlı risk değerlendirmesi, tam uyum korundu"
                    },
                    {
                        title: "Çeşitlendirilmiş İşletme: YZ Yönetişimi",
                        challenge: "Dağınık otomasyon girişimleri, parçalı YZ projelerinde ROI görünürlüğü yok",
                        action: "ROI odaklı önceliklendirme ve KPI raporlaması ile YZ Mükemmeliyet Merkezi kuruldu",
                        outcome: "25+ girişimde ROI görünürlüğü, performansı düşük olanların durdurulmasıyla 2 milyon $ tasarruf"
                    }
                ],
                impact_metrics: "OTIF stabilize edildi | Düşük performanslılardan 2M$ tasarruf | 25+ YZ girişimi yönetiliyor | %30 hacim artışına rağmen sıfır personel artışı",
                cta_text: "SİSTEM KONTROL TEŞHİSİNİ BAŞLAT"
            },
            finance: {
                hero_title: "STRATEJİK FİNANS: SİNİRLER",
                hero_subtitle: "Stratejik Finans",
                overview: "Sermaye, operasyonlardan koptuğunda bir yüke dönüşür. Finansı fabrika sahasıyla hizalıyoruz; hazine mantığını, likidite stratejilerini ve ROI yönetişimini doğrudan operasyonel karar alma sürecine entegre ediyoruz.",
                capabilities_title: "Yetkinlikler",
                capabilities: ["Lojistik akışıyla entegre hazine yönetimi", "Üretim metriklerine ve ROI'ye bağlı yatırım (Capex) planlaması", "Kurumsal yeniden yapılandırma ve holding optimizasyonu"],
                case_studies_title: "Gömülü Vaka Çalışmaları",
                case_studies: [
                    {
                        title: "Küresel Perakendeci: Hazine Yönetimi",
                        challenge: "Döviz dalgalanması ve parçalı bölgeler arası likidite",
                        action: "Hazine yönetimi lojistik akışına entegre edildi, hedging ve dinamik nakit yönetimi uygulandı",
                        outcome: "Döviz riskinde %20 azalma, 50 milyon $ işletme sermayesi açıldı, hazine öngörüleri tedarikle senkronize edildi"
                    },
                    {
                        title: "Endüstriyel OEM: Gömülü Finans",
                        challenge: "Operasyonel metriklerden kopuk yatırım planlaması",
                        action: "Makine kullanımını ROI'ye bağlayan öngörücü model kuruldu, yatırım gerekçesi üretim verileriyle birleştirildi",
                        outcome: "Verimsiz sermayede %30 azalma, CFO için şeffaf ROI öngörüsü"
                    },
                    {
                        title: "Endüstriyel Tedarikçi: Kurumsal Yeniden Yapılandırma",
                        challenge: "Yapısal karmaşıklık ve likidite zorluklarıyla karşılaşan hızlı büyüyen tedarikçi",
                        action: "Holding optimizasyonu, küresel vergi stratejisi ve sermaye akışı yapılandırması yönetildi",
                        outcome: "Yapısal vergi verimliliği ile yıllık 4 milyon $ tasarruf, finansal kapanış süresi 42 günden 18 güne indirildi"
                    }
                ],
                impact_metrics: "50M$ işletme sermayesi açıldı | Yıllık 4M$ vergi tasarrufu | %20 döviz riski azalması | Kapanış süresi: 42→18 gün",
                cta_text: "SİSTEM KONTROL TEŞHİSİNİ BAŞLAT"
                }
                },
                case_study_pages: {
                "global-control-tower": {
                title: "Küresel Otomotiv OEM: Kontrol Kulesi",
                subtitle: "3 bölgedeki 40.000'den fazla kıtalararası sevkiyatı DCSA uyumlu tek bir metodoloji altında nasıl birleştirdik.",
                pillar: "Flow",
                challenge: "Müşteri, lojistiği bağımsız olarak yöneten bölgesel silolar nedeniyle parçalı bir görünürlükle karşı karşıyaydı. Bu durum tutarsız verilere, reaktif karar alma süreçlerine ve yüksek riskli kıtalararası lansmanlarda önemli gecikmelere yol açıyordu.",
                action: "34 tam zamanlı personelin (FTE) işe alındığı ve eğitildiği bir Kıtalararası Operasyon Merkezi tasarladık ve kurduk. Birleşik bir metodoloji oluşturduk ve gerçek zamanlı görünürlük ile öngörücü uyarılar sağlamak için mevcut eski sistemlerin üzerine özel bir dijital katman yerleştirdik.",
                outcomes: [
                    "Tüm sevkiyatlar için tek bir küresel görünüm elde edildi",
                    "Bölgesel veri siloları ortadan kaldırıldı",
                    "Kritik lansman dönemlerinde sıfır büyük gecikme sağlandı",
                    "Tüm bölgelerde standartlaştırılmış DCSA uyumlu raporlama oluşturuldu"
                ],
                impactMetrics: [
                    { value: "40k+", label: "Sevkiyat/Yıl" },
                    { value: "34", label: "Yönetilen Personel" },
                    { value: "0", label: "Kritik Gecikme" },
                    { value: "100%", label: "Görünürlük" }
                ]
                },
                "formula-optimization": {
                title: "Kimya Üreticisi: Reçete Optimizasyonu",
                subtitle: "Altı Sigma ve Deney Tasarımı (DOE) ile kaliteden ödün vermeden yıllık 1,5 milyon dolar maliyet tasarrufu.",
                pillar: "Physics",
                challenge: "Üretici, artan girdi maliyetleriyle karşı karşıyaydı ancak katı Alman kalite standartlarına uyum ve parti başarısızlığı riski nedeniyle içerikleri kaliteden ödün vermeden azaltamıyordu.",
                action: "Ekibimiz doğrudan üretim laboratuvarlarına entegre oldu. Maliyet tasarrufu için ayarlanabilecek kritik olmayan değişkenleri belirlemek amacıyla Deney Tasarımı (DOE) ve Altı Sigma metodolojilerini kullanarak tam bir reçete optimizasyonu gerçekleştirdik.",
                outcomes: [
                    "Yıllık 1,5 milyon dolar tutarında tekrarlanan tasarruf belirlendi",
                    "Kalite spesifikasyonlarının %100'ü korundu",
                    "Dahili laboratuvar ekibi DOE metodolojileri konusunda geliştirildi",
                    "Parti varyansı %12 oranında azaltıldı"
                ],
                impactMetrics: [
                    { value: "1.5M$", label: "Yıllık Tasarruf" },
                    { value: "0", label: "Kalite Kaybı" },
                    { value: "%12", label: "Varyans Azaltma" },
                    { value: "6 Sigma", label: "Metodoloji" }
                ]
                },
                "ai-underwriting": {
                title: "AB Sigorta: YZ Sigortalama Motoru",
                subtitle: "Darboğazları gidermek ve OTIF'i stabilize etmek için ilk çok milyon Euro'luk yapay zeka sigortalama motorunun devreye alınması.",
                pillar: "Code",
                challenge: "Karmaşık sigorta belgelerinin manuel olarak incelenmesi devasa bir darboğaz yaratıyor, büyüme kapasitesini sınırlıyor ve farklı ekipler arasında tutarsız risk değerlendirmelerine yol açıyordu.",
                action: "Özel bir yapay zeka (YZ) sigortalama motoru geliştirdik ve devreye aldık. Genel amaçlı büyük dil modellerinden (LLM) farklı olarak bu, yüksek riskli finansal uyumluluk için tasarlanmış ve doğrudan eski çekirdek sigorta platformuna entegre edilmiş özel bir mimariydi.",
                outcomes: [
                    "Karar döngüleri önemli ölçüde hızlandı",
                    "Risk değerlendirme protokollerinde %100 tutarlılık sağlandı",
                    "Ek personel almadan sigortalama kapasitesi artırıldı",
                    "AB sigorta düzenlemeleriyle tam uyum sağlandı"
                ],
                impactMetrics: [
                    { value: "OTIF", label: "Stabilize Edildi" },
                    { value: "%100", label: "Tutarlılık" },
                    { value: "0", label: "Personel Artışı" },
                    { value: "AB", label: "Uyumlu" }
                ]
                }
                },
                },

};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        // Try to recover from local storage
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("language");
            if (saved === "en" || saved === "tr") {
                return saved;
            }
        }
        return "en";
    });

    // Persist to local storage whenever it changes
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("language", language);
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
