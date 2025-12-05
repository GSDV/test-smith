
// Dict of summaries for each test based on the combo of correctness
export const sum_and_svg =  {
    // r denotes Roman, u for UI with levels 1-2 for correctness (good vs bad) and 0 if not present
    // there is the summary and the svg paths to load
    "r1u0" : ["Poor roman performance", ["/overview_svgs/culture-25.svg", "/overview_svgs/econ-25.svg", "/overview_svgs/politics-60.svg"]],
    "r2u0" : ["Good roman performance", ["/overview_svgs/culture-90.svg", "/overview_svgs/econ-60.svg", "/overview_svgs/politics-90.svg"]],
    "r0u1" : ["Poor UI performance", ["/overview_svgs/design-25.svg", "/overview_svgs/typography-25.svg"]],
    "r0u2" : ["Good UI performance", ["/overview_svgs/design-90.svg", "/overview_svgs/typography-90.svg"]],
    "r1u1" : ["Poor UI and roman", ["/overview_svgs/culture-60.svg", "/overview_svgs/design-25.svg", "/overview_svgs/politics-25.svg"]],
    "r2u1" : ["Good roman, poor UI", ["/overview_svgs/culture-90.svg", "/overview_svgs/typography-25.svg", "/overview_svgs/design-25.svg"]],
    "r1u2" : ["Poor roman, good UI", ["/overview_svgs/politics-25.svg", "/overview_svgs/econ-25.svg", "/overview_svgs/design-90.svg"]],
    "r2u2" : ["Good roman and UI", ["/overview_svgs/culture-90.svg", "/overview_svgs/econ-90.svg", "/overview_svgs/design-90.svg"]],
};