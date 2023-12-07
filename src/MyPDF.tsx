// import React from "react";
// import ReactPDF, {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from "@react-pdf/renderer";

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });
// const onclick = () => {
//   ReactPDF.render(<MyPDF />, `1/example.pdf`);
// };
// // Create Document Component
// const MyPDF: React.FC = () => {
//   return (
//     <>
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.header}>
//             <Text>Section #1</Text>
//           </View>
//           <View style={styles.section}>
//             <Text>Section #2</Text>
//           </View>
//         </Page>
//       </Document>
//       <button onClick={onclick}>a</button>
//     </>
//   );
// };
// export default MyPDF;
