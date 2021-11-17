// const style = `
//   background: #00BCD4;
//   border-radius: 0.5em;
//   color: white;
//   font-weight: bold;
//   padding: 2px 0.5em;
// `

// function logger(...args: any) {
//   console.info(`%c${new Date().toLocaleString()}`, style, ...args)
// }

function logger(...args: any) {
  return args
}
export default logger
