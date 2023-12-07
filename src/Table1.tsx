// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Input,
//   Button,
//   TextField,
//   Stack,
//   Box,
//   Divider,
// } from "@mui/material";

// interface TableRowData {
//   id: number;
//   item: string;
//   description: string;
//   quantity: number;
//   price: number;
//   amount: number;
// }

// const InvoiceTable: React.FC = () => {
//   // Table
//   const [rows, setRows] = useState<TableRowData[]>([]);
//   const [currentItem, setCurrentItem] = useState<string>("");
//   const [currentDescription, setCurrentDescription] = useState<string>("");
//   const [currentQuantity, setCurrentQuantity] = useState<number>(null);
//   const [currentPrice, setCurrentPrice] = useState<number>(null);

//   // Add row in table
//   const handleAddRow = () => {
//     if (currentItem.trim() && currentQuantity > 0 && currentPrice > 0) {
//       const newRow: TableRowData = {
//         id: Date.now(),
//         item: currentItem.trim(),
//         description: currentDescription.trim(),
//         quantity: currentQuantity,
//         price: currentPrice,
//         amount: currentQuantity * currentPrice,
//       };

//       setRows([...rows, newRow]);
//       setCurrentItem("");
//       setCurrentDescription("");
//       setCurrentQuantity(0);
//       setCurrentPrice(0);
//     }
//   };

//   // Delete row in table
//   const handleDeleteRow = (id: number) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//   };

//   // calculate total
//   const calculateSubtotal = () => {
//     return rows.reduce((total, row) => total + row.amount, 0);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'Roboto', sans-serif",
//         fontWeight: "bolder",
//         fontSize: "17px",
//       }}
//     >
//       <Table>
//         <TableHead>
//           <TableRow
//             sx={{
//               borderRadius: "30px",
//               background: "rgba(0, 0, 0, 0.12)",
//             }}
//           >
//             <TableCell
//               sx={{
//                 fontFamily: "'Roboto', sans-serif",
//                 fontWeight: "bolder",
//                 fontSize: "17px",
//                 paddingLeft: "20px",
//               }}
//             >
//               Items
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontFamily: "'Roboto', sans-serif",
//                 fontWeight: "bolder",
//                 fontSize: "17px",
//               }}
//             >
//               Quantity
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontFamily: "'Roboto', sans-serif",
//                 fontWeight: "bolder",
//                 fontSize: "17px",
//               }}
//             >
//               Price
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontFamily: "'Roboto', sans-serif",
//                 fontWeight: "bolder",
//                 fontSize: "17px",
//               }}
//             >
//               Amount
//             </TableCell>
//             <TableCell
//               sx={{
//                 fontFamily: "'Roboto', sans-serif",
//                 fontWeight: "bolder",
//                 fontSize: "17px",
//               }}
//             >
//               Delete
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell
//                 sx={{
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                   // paddingBottom: "250px",
//                 }}
//               >
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="flex-start"
//                   spacing={11}
//                 >
//                   <p
//                     style={{
//                       fontSize: "17px",
//                       paddingTop: "30px",
//                       paddingLeft: " 7px",
//                       paddingRight: "0px",
//                     }}
//                   >
//                     {row.item}
//                   </p>
//                   <TextField
//                     value={row.description}
//                     multiline
//                     maxRows={12}
//                     style={{
//                       borderRadius: "10px",
//                       paddingTop: "15px",
//                       fontFamily: "'Roboto', sans-serif",
//                       fontWeight: "bolder",
//                       fontSize: "17px",
//                     }}
//                   />
//                 </Stack>
//               </TableCell>
//               <TableCell
//                 sx={{
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                   // paddingBottom: "250px",
//                 }}
//               >
//                 {row.quantity}
//               </TableCell>
//               <TableCell
//                 sx={{
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                   // paddingBottom: "250px",
//                 }}
//               >
//                 {row.price}
//               </TableCell>
//               <TableCell
//                 sx={{
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                   // paddingBottom: "250px",
//                 }}
//               >
//                 {row.amount}
//               </TableCell>
//               <TableCell
//                 sx={{
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                   // paddingBottom: "250px",
//                 }}
//               >
//                 <Button
//                   onClick={() => handleDeleteRow(row.id)}
//                   variant="contained"
//                   color="error"
//                 >
//                   X
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}

//           <TableRow>
//             <TableCell
//               sx={
//                 {
//                   // paddingBottom: "250px",
//                 }
//               }
//             >
//               <Stack
//                 direction="row"
//                 justifyContent="space-between"
//                 alignItems="flex-start"
//                 spacing={0}
//               >
//                 <Box>
//                   <input
//                     type="text"
//                     value={currentItem}
//                     onChange={(e) => setCurrentItem(e.target.value.trim())}
//                     style={{
//                       border: "none",
//                       fontWeight: "bold",
//                       fontSize: "17px",
//                       padding: "10px 5px",
//                       marginRight: "-px",
//                       paddingRight: "0px",
//                       width: "100px",
//                     }}
//                     placeholder="Item"
//                   />
//                 </Box>
//                 <TextField
//                   value={currentDescription}
//                   onChange={(e) => setCurrentDescription(e.target.value)}
//                   multiline
//                   maxRows={12}
//                   style={{
//                     borderRadius: "10px",
//                     fontFamily: "'Roboto', sans-serif",
//                     fontWeight: "bolder",
//                     fontSize: "17px",
//                   }}
//                 />
//               </Stack>
//             </TableCell>
//             <TableCell
//               sx={
//                 {
//                   // paddingBottom: "250px",
//                 }
//               }
//             >
//               <Input
//                 type="number"
//                 value={currentQuantity}
//                 onChange={(e) => setCurrentQuantity(parseInt(e.target.value))}
//                 sx={{
//                   borderRadius: "10px",
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                 }}
//               />
//             </TableCell>
//             <TableCell
//               sx={
//                 {
//                   // paddingBottom: "250px",
//                 }
//               }
//             >
//               <Input
//                 type="number"
//                 value={currentPrice}
//                 onChange={(e) => setCurrentPrice(parseFloat(e.target.value))}
//                 sx={{
//                   borderRadius: "10px",
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: "bolder",
//                   fontSize: "17px",
//                 }}
//               />
//             </TableCell>
//             <TableCell
//               sx={{
//                 // paddingBottom: "250px",

//                 borderRadius: "10px",
//                 fontFamily: "'Roboto', sans-serif",
//                 fontWeight: "bolder",
//                 fontSize: "17px",
//               }}
//             >
//               {currentQuantity * currentPrice}
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//       <Divider
//         sx={{
//           border: "none",
//           background: "rgba(0, 0, 0, 0.12)",
//           padding: ".09px",
//         }}
//       ></Divider>
//       <Stack
//         direction="row"
//         alignItems="center"
//         spacing={80}
//         padding={"20px 0"}
//       >
//         <Box
//           sx={{
//             paddingLeft: "50px",
//           }}
//         >
//           <Button onClick={handleAddRow} variant="contained" color="primary">
//             Add Row
//           </Button>
//         </Box>
//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           alignItems="flex-start"
//           spacing={2}
//           fontSize={"larger"}
//         >
//           <p>Subtotal:</p>
//           <p>{calculateSubtotal()}</p>
//         </Stack>
//       </Stack>
//     </div>
//   );
// };

// export default InvoiceTable;
