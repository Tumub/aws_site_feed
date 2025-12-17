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
    not_found: {
        title: string;
        msg: string;
        home_btn: string;
    };
};

const translations: Record<Language, Translations> = {
    en: {
        hero: {
            title_suffix: "TorqueFoundry | Forging Intelligence into Production",
            headline: "Strategy That Survives The Shopfloor.",
            subheadline: "We fuse Digital, Supply Chain, and Manufacturing to evolve your operations from within. No \"rip and replace.\" Just execution that withstands the reality of production.",
            integrated_areas: "Digital · Supply Chain · Manufacturing Systems",
            engagement_model: "Co-investment, capital-protected diagnostics, shared upside.",
            cta_primary: "SEE THE RISK-REVERSAL MODEL",
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
                desc: "Briefly describe the specific crisis or opportunity you are targeting. No fluff.",
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
            oee: "Line availability in live pilots.",
            inventory: "Working capital unlocked in 12 months.",
            throughput: "No additional capex, just evolution.",
            designs: "We design the overlays, telemetry, and decision HUDs that sit on top of your reality."
        },
        problem: {
            headline: "Operations Don't Live In Slide Decks.",
            body: "Transformation doesn't fail because the strategy is wrong. It fails because execution can't survive the reality of the shopfloor—the heat, the dust, and the legacy constraints shown here. We bridge that gap."
        },
        origin: {
            headline: "WE DON'T ADVISE. WE EMBED.",
            story_p1: "I’ve spent years inside global operations—operating at the intersection of Sweden’s planning discipline, Turkey’s execution agility, and Switzerland’s systems precision. Across industries, the pattern is the same: Transformation doesn't fail because the strategy is wrong. It fails because execution can't survive the reality of the shopfloor.",
            story_p2: "TorqueFoundry was built to close that gap. This isn't a solo game. It requires fusing four disciplines into one execution spine: Digital + Supply Chain + Manufacturing + Finance. So, I built a structure that matches the reality:",
            story_p3: "",
            story_p4: "",
            founder_name: "UMUT",
            founder_title: "Founder & Managing Partner",
            execution_core_title: "THE EXECUTION CORE",
            leader: { title: "SEBASTIAN", sub: "HEAD OF MANUFACTURING", desc: "Shaped by high-pressure industrial environments. He ensures every strategy survives the heat, dust, and friction of the line." },
            architect: { title: "EMRAH", sub: "LEAD SYSTEMS ARCHITECT", desc: "Focused on building the architecture that turns data into measurable performance. He bridges the gap between legacy machines and modern intelligence." },
            governance_title: "STRATEGIC GOVERNANCE",
            advisor: {
                title: "ALPER PEKCAN",
                sub: "BOARD ADVISOR - CORPORATE FINANCE",
                desc: "He doesn't run the shopfloor; he validates the business case. As a seasoned finance strategist, he bridges the gap between operations and the CFO, engineering the models that allow us to share the transformation risk."
            },
            closing: "We don’t do magic. We do engineering. We evolve in place—inside the systems you already run."
        },
        embedded: {
            philosophy: "Embedded Philosophy"
        },
        trio: {
            headline: "Embedded Expertise. Operational Outcomes.",
            description: "We don't parachute in slide-makers. We embed senior operators across Digital, Supply Chain, and Manufacturing who sit inside your war room and own outcomes with you.",
            manufacturing: {
                title: "Manufacturing",
                subtitle: "The Foundry — Optimization based on decades of floor experience.",
                bullets: ["Line diagnostics without stopping production", "Constraint-based debottlenecking", "Operator-centric UX for adoption"]
            },
            supply_chain: {
                title: "Supply Chain",
                subtitle: "The Flow — End-to-end procurement and logistics.",
                bullets: ["Network and lane redesign", "Inventory segmentation and buffers", "Control towers that operators actually use"]
            },
            digital: {
                title: "Digital Backbone",
                subtitle: "The Torque — AI-driven transformation within organically grown environments.",
                bullets: ["Data products on top of legacy stacks", "AI that respects process reality", "Secure, governed integration patterns"]
            },
            finance: {
                title: "Finance",
                subtitle: "The Ledger — Business case validation and risk engineering.",
                bullets: ["Business case validation before spend", "Risk-sharing financial models", "Tax Optimization & Incentive Alignment"]
            }
        },
        timeline: {
            title: "Vertical System Integration Timeline",
            subtitle: "We don't sell a generic framework. We run a fixed protocol that ties your brownfield reality to a live Digital Backbone from diagnostic through to P&L.",
            step1: { title: "Step 1 Deep-Dive Diagnostic", desc: "We map the messy reality of your brownfield site. We quantify constraints before writing code." },
            step2: { title: "Step 2 The Blueprint", desc: "We design the digital overlay that fits your physical reality. No fantasy architectures. Only systems your floor can actually run." },
            step3: { title: "Step 3 Embedded Execution", desc: "We ship change from inside your operation. We don't hand off the plan. We code and configure alongside your team on the floor to upskill them in real-time." },
            step4: { title: "Step 4 Continuous Optimization", desc: "We keep optimising until the P&L reflects the change. We verify the ROI and tune the system as conditions shift, not just at quarter-end reviews." }
        },
        cases: {
            headline: "Nested, Not Just Near.",
            subheadline: "We don't just advise. We embed. We sit inside your stand-ups, shift handovers, and control towers—helping your teams change from within.",
            war_story_label: "War Story",
            erp: {
                title: "Migrating Legacy ERP without stopping the line.",
                desc: "Re-platformed core planning and execution from a 20-year-old ERP while maintaining service levels and OEE across three plants.",
                metrics: ["0 unscheduled line stops during cutover", "+9% schedule adherence in 6 months"]
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
                    bio: "15+ years managing 40,000+ shipments and >$790M spend. Unified operations across 3 regions.",
                    badge: "Coupa Sourcing Excellence 2024",
                    cases: [
                        { title: "Major Automotive OEM CoE", pub: "Intercontinental Ops Center.", auth: "Created team of 34 from scratch. Unified 40k shipments/year across 3 regions." },
                        { title: "AI Track & Trace", pub: "GIT Reduction & Auto-Audit.", auth: "Reduced GIT by 125 MSEK (~$11M). 70% reduction in manual invoicing via AI milestones." },
                        { title: "Global Transport Sourcing", pub: "Coupa Optimization ($790M).", auth: "30% value improvement on $790M spend. Cycle time reduced 8mo → 4mo using 'Best Value' logic." },
                        { title: "Crisis Management", pub: "Covid Volume Surge.", auth: "Managed $1.2B spend during port lockdowns. Volume surged 596k → 638k TEU." },
                        { title: "DCSA Control Tower", pub: "Snowflake & API Integration.", auth: "Reduced carrier onboarding 6mo → 4 weeks using DCSA standards." },
                        { title: "Global Capacity Planning", pub: "IKEA Supplier Capacity.", auth: "Predicted stock-outs months in advance via monthly IBP cycles." },
                        { title: "Coupa Excellence 2024", pub: "Global Sourcing Award.", auth: "Best-in-class implementation for >$600M spend." }
                    ]
                },
                manufacturing: {
                    title: "Shop Floor Excellence",
                    bio: "19+ years. OEM-Ready Compliance (BMW, Mercedes, Toyota). Hidden Factory Optimization.",
                    badge: "IATF 16949 Lead Auditor",
                    cases: [
                        { title: "Chemical Optimization", pub: "Process & Recipe Optimization.", auth: "$1.5M Annual Savings via Six Sigma without compromising quality." },
                        { title: "The 'Invisible' Machine", pub: "Line Balancing (5 → 4 machines).", auth: "Eliminated €450K machine cost. Unlocked $1.0M capacity value." },
                        { title: "Greenfield Commissioning", pub: "4 Major Facility Setups.", auth: "Managed €5M+ investment. Plating & Extrusion plants (Auto & White Goods)." },
                        { title: "Solar Energy Revenue", pub: "Sustainability as Profit.", auth: "Generated $300k/year revenue via SPP installation." },
                        { title: "Market Entry Line", pub: "Kartepe White Goods Line.", auth: "Unlocked contracts with Arçelik, Vestel & Uğur Cooling." }
                    ]
                },
                digital: {
                    title: "Agentic Automation & Architecture",
                    bio: "Bridging the gap between IT and Business. Driving AI transformation in legacy environments.",
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
                { title: "The Control Tower Mirage", summary: "Why spending $5M on a visual dashboard fails if your underlying data hygiene is trash. You cannot visualize what you cannot measure.", tag: "DIGITAL HYGIENE" },
                { title: "Stop Waiting for Greenfield", summary: "The perfect factory doesn't exist. How to overlay AI onto 1980s PLCs and legacy ERPs without ripping out the nervous system.", tag: "BROWNFIELD REALITY" },
                { title: "The Hidden Factory P&L", summary: "Your financial P&L lies. It hides the 'Shadow P&L' of rework, expedited freight, and manual Excel reconciliation. Here is how to audit it.", tag: "FINANCIAL FORENSICS" },
                { title: "Merging the Frankenstein", summary: "A case study on merging three different ERPs over a holiday weekend using an API layer instead of a migration script.", tag: "SYSTEM ARCHITECTURE" },
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
            risk_reversal: "Transformation shouldn't require blind faith. We deploy our expertise upfront to validate the business case before you commit your major budget.",
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
            context_text: "This isn't a free workshop. It's a structured 'Gate-0' assessment where we put our skin in the game. If the upside isn't there, you walk away with clarity—and zero sunk costs in consulting fees.",
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
            signal_check_btn: "Initiate Signal Check"
        },
        footer: {
            tagline: "Basel, Switzerland · Industrial Digital Transformation",
            copyright: "© 2025 TorqueFoundry Advisory. Basel, Switzerland."
        },
        not_found: {
            title: "404",
            msg: "Oops! Page not found",
            home_btn: "Return to Home"
        }
    },
    tr: {
        hero: {
            title_suffix: "TorqueFoundry | Zekâyı Sahada Sonuca Çeviriyoruz",
            headline: "Sahada ayakta kalan strateji.",
            subheadline: "Operasyonlarınızı içeriden dönüştürmek için Dijital + Tedarik Zinciri + Üretim disiplinlerini tek bir icra omurgasında birleştiriyoruz. “Yık-yap” yok. Mevcut tesisin (brownfield) gerçekliğine uygun uygulama var.",
            integrated_areas: "Entegre Alanlar: Dijital · Tedarik Zinciri · Üretim Sistemleri",
            engagement_model: "Çalışma Modeli: Ortak yatırım · Sermaye-korumalı değerlendirme · Paylaşılan kazanç",
            cta_primary: "SERMAYE-KORUMALI MODELİ GÖRÜN",
            cta_secondary: "YAKLAŞIMIMIZ",
            engagement_label: "Çalışma Modeli",
            oee_label: "OEE",
            inventory_label: "Stok",
            throughput_label: "Çıktı",
            embedded_domains: "Gömülü Alanlar",
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
            complexity: "Karmaşıklığın Ötesini Gör",
            labels: {
                physical: "FİZİKSEL VARLIK (Eski)",
                digital: "DİJİTAL İKİZ (Gelecek)"
            }
        },
        stats: {
            oee: "OEE: %96,3 — canlı pilotlarda hat kullanılabilirliği",
            inventory: "Stok: -%18 — 12 ayda serbest kalan işletme sermayesi",
            throughput: "Çıktı (Throughput): +%11 — ek Capex olmadan",
            designs: "Gerçekliğinizin üzerine oturan telemetri katmanlarını, karar ekranlarını ve yönetim panellerini tasarlarız."
        },
        problem: {
            headline: "Operasyonlar sunumlarda yaşamaz.",
            body: "Dönüşüm projeleri strateji yanlış olduğu için değil; uygulama, sahanın sıcağına-tozuna ve eski sistem kısıtlarına (legacy constraints) dayanamadığı için dağılır. Biz bu boşluğu kapatırız."
        },
        origin: {
            headline: "TAVSİYE ETMİYORUZ. GÖMÜLÜ ÇALIŞIYORUZ.",
            story_p1: "Yıllarımı küresel operasyonların içinde—İsveç'in planlama disiplini, Türkiye'nin uygulama çevikliği ve İsviçre'nin sistem hassasiyetinin kesişiminde—geçirdim. Endüstriler değişse de desen aynı: Dönüşüm strateji yanlış olduğu için başarısız olmaz. Uygulama, atölye zemininin gerçekliğine dayanamadığı için başarısız olur.",
            story_p2: "TorqueFoundry bu boşluğu kapatmak için kuruldu. Bu tek kişilik bir oyun değil. Dört disiplini tek bir uygulama omurgasında birleştirmeyi gerektirir: Dijital + Tedarik Zinciri + Üretim + Finans. Bu yüzden, gerçekliğe uyan bir yapı kurdum:",
            story_p3: "",
            story_p4: "",
            founder_name: "UMUT",
            founder_title: "Kurucu & Yönetici Ortak",
            execution_core_title: "UYGULAMA ÇEKİRDEĞİ",
            leader: { title: "SEBASTIAN", sub: "ÜRETİM LİDERİ", desc: "Yüksek baskılı endüstriyel ortamlarda şekillendi. Her stratejinin üretim hattının sıcağına, tozuna ve sürtünmesine dayanmasını sağlar." },
            architect: { title: "EMRAH", sub: "LİDER SİSTEM MİMARI", desc: "Veriyi ölçülebilir performansa dönüştüren mimariyi inşa etmeye odaklı. Eski makineler ile modern zeka arasındaki boşluğu kapatır." },
            governance_title: "STRATEJİK YÖNETİŞİM",
            advisor: {
                title: "ALPER PEKCAN",
                sub: "YÖNETİM KURULU DANIŞMANI",
                desc: "Sahayı yönetmez; iş modelini doğrular. Deneyimli bir finans stratejisti olarak, operasyonlar ile CFO arasındaki boşluğu kapatır ve dönüşüm riskini paylaşmamızı sağlayan modelleri kurgular."
            },
            closing: "Sihir yapmıyoruz. Mühendislik yapıyoruz. Olduğunuz yerde—halihazırda çalıştırdığınız sistemlerin içinde gelişiyoruz."
        },
        embedded: {
            philosophy: "Gömülü Felsefe"
        },
        trio: {
            headline: "Entegre Uzmanlık. Operasyonel Sonuçlar.",
            description: "Sunum yapanları paraşütle indirmeyiz. Dijital, Tedarik Zinciri ve Üretim alanlarında kıdemli operatörleri, sizin savaş odanıza entegre eder ve sonuçları sizinle birlikte sahipleniriz.",
            manufacturing: {
                title: "Üretim",
                subtitle: "The Foundry",
                bullets: ["Üretimi durdurmadan hat teşhisi", "Kısıt tabanlı darboğaz giderme", "Benimsenme için operatör odaklı UX"]
            },
            supply_chain: {
                title: "Tedarik Zinciri",
                subtitle: "The Flow",
                bullets: ["Ağ/rota yeniden tasarımı", "Stok segmentasyonu ve tampon yönetimi", "Planlamacının gerçekten kullandığı kontrol kuleleri"]
            },
            digital: {
                title: "Dijital Omurga",
                subtitle: "The Torque",
                bullets: ["Eski sistemlerin üzerinde veri ürünleri", "Süreç gerçekliğine saygılı yapay zekâ", "Güvenli ve yönetişime uygun entegrasyon"]
            },
            finance: {
                title: "Finans",
                subtitle: "The Ledger — İş modeli doğrulama ve risk mühendisliği.",
                bullets: ["Harcamadan önce iş modeli doğrulama", "Risk paylaşımlı finansal modeller", "Vergi Optimizasyonu ve Teşvik Yönetimi"]
            }
        },
        timeline: {
            title: "Dikey Sistem Entegrasyonu – 4 Adım",
            subtitle: "Jenerik bir çerçeve (framework) satmıyoruz. Brownfield (mevcut) gerçeğinizi, teşhisten P&L’e kadar canlı bir Dijital Omurgaya bağlayan sabit bir protokol uyguluyoruz.",
            step1: { title: "Derinlemesine Değerlendirme", desc: "Mevcut gerçekliği haritalar, kısıtları ölçeriz." },
            step2: { title: "Blueprint", desc: "Fiziksel gerçekliğe uyan dijital katmanı tasarlarız." },
            step3: { title: "Entegre Uygulama", desc: "Ekibinizle yan yana uygular, bilgiyi sahada transfer ederiz." },
            step4: { title: "Sürekli Optimizasyon", desc: "P&L değişene kadar doğrular, ayarları iteratif iyileştiririz." }
        },
        cases: {
            headline: "Yakınında Değil, İçinde.",
            subheadline: "Sadece tavsiye vermeyiz. Gömülürüz (embed). Sizin vardiya toplantılarınıza, nöbet değişimlerinize ve kontrol kulelerinize oturur; ekiplerinizin içeriden değişmesine yardım ederiz.",
            war_story_label: "Saha Hikayesi",
            erp: {
                title: "Vaka Özeti | Hattı durdurmadan ERP geçişi",
                desc: "20 yıllık bir ERP'den; servis seviyelerini ve OEE'yi koruyarak, üç fabrikada ana planlama ve yürütmeyi yeniden platformlaştırdık.",
                metrics: ["Cutover’da 0 plansız hat duruşu", "6 ayda +%9 plan uyumu"]
            },
            inventory: {
                title: "Vaka Özeti | 145M$ işletme sermayesi açığa çıkarma",
                desc: "Spreadsheet tahminleri yerine; SKU'ları segmentlere ayırdık, tamponları yeniden tanımladık ve tedariği gerçek talep sinyalleriyle senkronize ettik.",
                metrics: ["-$145M net işletme sermayesi", "Hizmet seviyesinde +3,5 puan iyileşme"]
            }
        },
        portfolio: {
            dossier_label: "Dijital Dosya",
            headline: "Etkiyi Deşifre Etmek.",
            subheadline: "Teori yok. Slayt yok. Üretim, Tedarik Zinciri ve Dijital genelinde gerçekleşmiş net P&L etkisi.",
            partners_title: "Yönetici Ortaklar",
            partners: {
                supplyChain: {
                    title: "Kaynaktan Müşteriye Bağlantı",
                    bio: "15+ yıl, 40.000+ sevkiyat ve >790M$ harcama yönetimi. 3 bölgede operasyonları birleştirdi.",
                    badge: "Coupa Tedarik Mükemmelliği 2024",
                    cases: [
                        { title: "Büyük Otomotiv OEM CoE", pub: "Kıtalararası Operasyon Merkezi.", auth: "Sıfırdan 34 kişilik ekip kurdu. 3 bölgede 40k sevkiyat/yıl birleştirdi." },
                        { title: "Yapay Zeka Takip & İzleme", pub: "GIT Azaltma & Otomatik Denetim.", auth: "GIT'i 125 MSEK (~11M$) azalttı. AI kilometre taşları ile manuel faturalamada %70 azalma." },
                        { title: "Global Taşıma Tedariki", pub: "Coupa Optimizasyonu (790M$).", auth: "790M$ harcamada %30 değer iyileştirmesi. 'En İyi Değer' mantığı ile döngü süresi 8 aydan 4 aya düştü." },
                        { title: "Kriz Yönetimi", pub: "Kovid Hacim Artışı.", auth: "Liman kapanışları sırasında 1,2 milyar dolar harcamayı yönetti. Hacim 596k TEU'dan 638k TEU'ya çıktı." },
                        { title: "DCSA Kontrol Kulesi", pub: "Snowflake & API Entegrasyonu.", auth: "DCSA standartlarını kullanarak taşıyıcı katılımını 6 aydan 4 haftaya indirdi." },
                        { title: "Global Kapasite Planlama", pub: "IKEA Tedarikçi Kapasitesi.", auth: "Aylık IBP döngüleri ile stok tükenmelerini aylar öncesinden tahmin etti." },
                        { title: "Coupa Mükemmelliği 2024", pub: "Global Tedarik Ödülü.", auth: "Best-in-class implementation for >$600M spend." }
                    ]
                },
                manufacturing: {
                    title: "Saha Mükemmelliği",
                    bio: "19+ yıl. OEM-Hazır Uyumluluk (BMW, Mercedes, Toyota). Gizli Fabrika (Hidden Factory) Optimizasyonu.",
                    badge: "IATF 16949 Baş Denetçi",
                    cases: [
                        { title: "Kimyasal Optimizasyon", pub: "Süreç & Reçete Optimizasyonu.", auth: "Kaliteden ödün vermeden Altı Sigma ile yıllık 1,5 Milyon Dolar Tasarruf." },
                        { title: "'Görünmez' Makine", pub: "Hat Dengeleme (5 makine yerine 4).", auth: "450K € makine maliyeti elimine edildi. 1,0 Milyon Dolarlık kapasite değeri açığa çıktı." },
                        { title: "Sıfırdan (Greenfield) Devreye Alma", pub: "4 Büyük Tesis Kurulumu.", auth: "5M €+ yatırımı yönetti. Kaplama & Ekstrüzyon tesisleri (Otomotiv & Beyaz Eşya)." },
                        { title: "Güneş Enerjisi Geliri", pub: "Kar Olarak Sürdürülebilirlik.", auth: "SPP kurulumu ile yıllık 300 bin dolar gelir sağlandı." },
                        { title: "Pazara Giriş Hattı", pub: "Kartepe Beyaz Eşya Hattı.", auth: "Arçelik, Vestel & Uğur Soğutma ile sözleşmelerin kilidini açtı." }
                    ]
                },
                digital: {
                    title: "Ajan Bazlı Otomasyon & Mimari",
                    bio: "BT ve İş Birimi arasındaki boşluğu kapatır. Eski (Legacy) ortamlarda Yapay Zeka dönüşümünü yönetir.",
                    badge: null,
                    cases: [
                        { title: "Ajan Bazlı Lojistik", pub: "Yapay Zeka Ajan Sürüsü.", auth: "Eski sistemlerde manuel rezervasyon/doğrulamayı ajanlarla değiştirdi." },
                        { title: "Otomatik Sigorta Tahsisi", pub: "AB'de İlk Çok-Milyonluk AI.", auth: "Belgelerden bilgiye geçiş. Devasa bilgi taşıyan Yapay Zeka." },
                        { title: "Havayolu CX Dönüşümü", pub: "Büyük Avrupa Havayolu.", auth: "AI botları ile satış sonrasını yeniden tasarladı. UX iyileştirildi & iş yükü azaltıldı." },
                        { title: "Yapay Zeka Self-Servis", pub: "Sigorta & Kamu Otomasyonu.", auth: "Büyük İsviçreli sigortacı & Alman çalışma ajansı (DWP) için tasarım liderliği." },
                        { title: "Yapay Zeka Mükemmeliyet Merkezi", pub: "Otomasyon Stratejisi.", auth: "Otomasyonu BT'den değil iş biriminden yönlendirmek için CoE kurdu." },
                        { title: "Otomotiv AI Stratejisi", pub: "Büyük Alman OEM.", auth: "Otomotiv ekiplerine gömülü operasyonel model tasarladı." }
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
                { label: "GÖRÜNÜRLÜK (VISIBILITY)", items: ["Project44", "FourKites", "DCSA Standartları", "SAP BN"] },
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
            risk_reversal: "Dönüşüm körü körüne inanç gerektirmemeli. Büyük bütçenizi taahhüt etmeden önce iş modelini (business case) doğrulamak için uzmanlığımızı önden sunuyoruz.",
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
            context_text: "Bu ücretsiz bir çalıştay değildir. Her iki tarafın da elini taşın altına koyduğu yapılandırılmış bir 'Gate-0' değerlendirmesidir. Eğer potansiyel (upside) orada değilse, netlikle ayrılırsınız—ve danışmanlık ücretlerinde sıfır batık maliyetiniz olur.",
            apply_btn: "DOĞRULAMAYI BAŞLAT"
        },
        contact: {
            direct_line: "Doğrudan hat.",
            no_sdr: "SDR yok. Yazdığınızda doğrudan Yönetici Ortak ile konuşursunuz.",
            immediate_action: "Acil Eylem",
            urgent_case: "Acil durum: Canlı kriz / başarısız proje için “Kırmızı Takım” hızlı değerlendirme.",
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
            signal_check_btn: "Sinyal Kontrolünü Başlat"
        },
        footer: {
            tagline: "Basel, İsviçre · Endüstriyel Dijital Dönüşüm",
            copyright: "© 2025 TorqueFoundry Advisory. Basel, İsviçre."
        },
        not_found: {
            title: "404",
            msg: "Eyvah! Sayfa bulunamadı",
            home_btn: "Ana Sayfaya Dön"
        }
    }
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
