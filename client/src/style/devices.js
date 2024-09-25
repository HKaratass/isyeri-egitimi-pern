const breakpointsMin = {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
}

const breakpointsMax = {
    xs: "428px",
    sm: "600px",
    md: "900px",
    lg: "1280px",
    xl: "1440px",
    "2xl": "1920px",
    // my_limit: "415px"
    duyuru4line: "1280px",
    mainbreakpoint: "1035px",
    secondbreakpoint: "920px",
    my_limit: "500px",
}

export const devices = {
    xs: `(max-width: ${breakpointsMax.xs})`,
    sm: `(max-width: ${breakpointsMax.sm})`,
    md: `(max-width: ${breakpointsMax.md})`,
    lg: `(max-width: ${breakpointsMax.lg})`,
    xl: `(max-width: ${breakpointsMax.xl})`,
    "2xl": `(max-width: ${breakpointsMax["2xl"]})`,
    my: `(max-width: ${breakpointsMax.my_limit})`,
    d4l: `(max-width: ${breakpointsMax.duyuru4line})`,
    mainbrk: `(max-width: ${breakpointsMax.mainbreakpoint}) and (min-width: ${breakpointsMax.my_limit})`,
    scdbrk: `(max-width: ${breakpointsMax.secondbreakpoint}) and (min-width: ${breakpointsMax.my_limit})`,
}

//https://www.codevertiser.com/styled-components-media-queries/
// interface Size {
//     xs: string
//     sm: string
//     md: string
//     lg: string
//     xl: string
//     xxl: string
// }

// const size: Size = {
//     xs: '400px', // for small screen mobile
//     sm: '600px', // for mobile screen
//     md: '900px', // for tablets
//     lg: '1280px', // for laptops
//     xl: '1440px', // for desktop / monitors
//     xxl: '1920px', // for big screens
// }

// export const device = {
//     xs: `(max-width: ${size.xs})`,
//     sm: `(max-width: ${size.sm})`,
//     md: `(max-width: ${size.md})`,
//     lg: `(max-width: ${size.lg})`,
//     xl: `(max-width: ${size.xl})`,
//     xxl: `(max-width: ${size.xxl})`,
// }