/**
 * ============================================================================
 * UTICA UNIVERSITY — ACC 201 FINAL EXAM REVIEW JEOPARDY (Chapters 8–12)
 * External Questions Data File
 * ============================================================================
 *
 * Keep this file in the SAME FOLDER as "acc-201-jeopardy.html"
 * (or load it directly from the Team & File Setup tab).
 * ============================================================================
 */

window.ACC201_JEOPARDY_DATA = {
  courseCode: "ACC 201 • Financial Accounting (Ch. 8–12)",
  gameTitle: "Final Exam Review Jeopardy",
  institution: "Utica University",
  categories: [
    {
      category: "Long-Term Assets (Ch. 8)",
      questions: [
        {
          value: 100,
          q: "When multiple plant assets are acquired together for a single lump-sum price, their total cost is allocated based on this measure of each asset.",
          a: "What is relative fair value (or appraised value)?"
        },
        {
          value: 200,
          q: "Under the straight-line method, a machine costing $120,000 with a $20,000 salvage value and a 5-year useful life has this annual depreciation expense.",
          a: "What is $20,000?",
          note: "($120,000 − $20,000) / 5 years"
        },
        {
          value: 300,
          q: "Unlike straight-line or declining-balance depreciation, this method bases annual depreciation directly on actual output or usage during the period.",
          a: "What is the units-of-production method?"
        },
        {
          value: 400,
          q: "An asset costing $100,000 with a 5-year life and $15,000 salvage value is depreciated in Year 1 under double-declining balance for this amount.",
          a: "What is $40,000?",
          note: "Double-declining rate = 2 / 5 = 40%; $100,000 × 40%; salvage value is ignored until ending book value approaches it"
        },
        {
          value: 500,
          q: "A company buys equipment for $96,000 on October 1 with a 4-year life and $0 salvage value. Using straight-line depreciation, its Year 1 depreciation expense is this amount.",
          a: "What is $6,000?",
          note: "$96,000 / 4 years = $24,000/year × 3/12 of a year from Oct 1 to Dec 31"
        }
      ]
    },
    {
      category: "Current Liabilities (Ch. 9)",
      questions: [
        {
          value: 100,
          q: "When a company collects $500,000 in advance for season tickets before games are played, it debits Cash and credits this liability account.",
          a: "What is Unearned Revenue?"
        },
        {
          value: 200,
          q: "When a retailer collects 6% sales tax on a $10,000 cash sale, this liability account is credited for $600.",
          a: "What is Sales Tax Payable?"
        },
        {
          value: 300,
          q: "Unlike FICA Medicare tax, which applies to all gross earnings, these two payroll taxes apply only up to a set cumulative annual wage cap per employee.",
          a: "What are FICA Social Security, FUTA, and SUTA?",
          note: "Any of these capped payroll taxes"
        },
        {
          value: 400,
          q: "An employee has earned $6,600 through September and earns $900 in October. If SUTA applies to the first $7,000 of earnings, this amount of October wages is subject to SUTA.",
          a: "What is $400?",
          note: "$7,000 cap − $6,600 already earned = $400 remaining subject to tax"
        },
        {
          value: 500,
          q: "A liability whose existence is uncertain but depends on a future event—such as a pending lawsuit or product warranty—falls into this accounting category.",
          a: "What is a contingent liability (or estimated liability, for probable and reasonably estimable obligations like warranties)?"
        }
      ]
    },
    {
      category: "Long-Term Liabilities (Ch. 10)",
      questions: [
        {
          value: 100,
          q: "A bond sells at a discount when its stated contract rate is lower than this rate on the issue date.",
          a: "What is the market rate (effective interest rate)?"
        },
        {
          value: 200,
          q: "For bonds issued at a discount, total bond interest expense over the life of the bonds equals cash interest paid plus this amount.",
          a: "What is the total bond discount (carrying value at maturity − issue price)?"
        },
        {
          value: 300,
          q: "A $400,000 bond issue with a 6% annual contract rate paying interest semiannually requires this cash interest payment every six months.",
          a: "What is $12,000?",
          note: "$400,000 × 6% × 6/12"
        },
        {
          value: 400,
          q: "Under straight-line amortization, a $30,000 bond discount on a 5-year (10-semiannual-period) bond reduces the unamortized discount by this amount each semiannual period.",
          a: "What is $3,000?",
          note: "$30,000 / 10 periods"
        },
        {
          value: 500,
          q: "Over the life of a bond issued at a discount, as the unamortized discount is amortized, the bond's carrying value moves steadily toward this amount.",
          a: "What is par value (or face value / maturity value)?"
        }
      ]
    },
    {
      category: "Stockholders' Equity (Ch. 11)",
      questions: [
        {
          value: 100,
          q: "Cash dividends are calculated per share based on this category of shares rather than authorized or issued shares.",
          a: "What are outstanding shares?"
        },
        {
          value: 200,
          q: "When a corporation repurchases its own common stock and holds it rather than retiring it, the shares are recorded in this contra-equity account.",
          a: "What is Treasury Stock?"
        },
        {
          value: 300,
          q: "On the date the board of directors votes to declare a cash dividend, Retained Earnings is debited and this account is credited.",
          a: "What is Dividends Payable?"
        },
        {
          value: 400,
          q: "Ending Retained Earnings on the Statement of Retained Earnings equals Beginning Retained Earnings plus Net Income minus this item.",
          a: "What are dividends (cash and stock dividends)?"
        },
        {
          value: 500,
          q: "A company buys back 2,000 shares of treasury stock at $18 per share and later resells all 2,000 shares for $22 per share. The $8,000 difference is credited to this account.",
          a: "What is Paid-In Capital in Excess of Par Value, Treasury Stock (or Paid-In Capital from Treasury Stock)?"
        }
      ]
    },
    {
      category: "Statement of Cash Flows (Ch. 12)",
      questions: [
        {
          value: 100,
          q: "Purchasing equipment for cash is classified under this section of the Statement of Cash Flows.",
          a: "What are Investing Activities?"
        },
        {
          value: 200,
          q: "Borrowing money from creditors or repaying debt principal is reported under this section of the Statement of Cash Flows.",
          a: "What are Financing Activities?"
        },
        {
          value: 300,
          q: "Under the indirect method, this noncash operating expense is added back to Net Income because it reduced net income without using cash.",
          a: "What is depreciation expense?"
        },
        {
          value: 400,
          q: "Under the indirect method, an increase in a noncash current asset—such as Accounts Receivable, Inventory, or Prepaid Expenses—has this effect on the reconciliation from Net Income to operating cash flows.",
          a: "What is subtracted (it reduces cash flow from operating activities)?"
        },
        {
          value: 500,
          q: "Under the indirect method, an increase in a current operating liability—such as Accounts Payable, Wages Payable, or Income Taxes Payable—has this effect on the reconciliation from Net Income to operating cash flows.",
          a: "What is added (it increases cash flow from operating activities)?"
        }
      ]
    }
  ],
  finalWager: {
    category: "The Bottom Line",
    q: "A company begins the year with $50,000 in Retained Earnings. During the year, it earns $120,000 in Net Income, records $15,000 in depreciation expense, and declares a $2.00 per share cash dividend on 20,000 authorized, 15,000 issued, and 12,500 outstanding shares of common stock. This is the company's Ending Retained Earnings at year-end.",
    a: "What is $145,000?",
    note: "Beginning Retained Earnings ($50,000) + Net Income ($120,000) − Dividends ($25,000) = $145,000. Dividends = 12,500 × $2.00."
  }
};
