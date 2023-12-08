import React from "react";
import {
  Box,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import * as renderer from "@react-pdf/renderer";
import Render2 from "./Render2";

import { styled } from "@mui/system";
const CustomTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});
interface PreviewProps {
  selectedCurrency: string;
  //header
  selectedFile: any;
  invoiceTitle: string;
  companyName: string;
  country: string;
  state: string;
  Trade: string;
  companyAddress: string;
  PhoneNumber: string;
  website: string;
  city: string;

  //Body
  ecompanyName: string;
  ecountry: string;
  estate: string;
  ecompanyAddress: string;
  ePhoneNumber: string;
  ewebsite: string;
  ecity: string;
  invoicenumber: string;
  posonumber: string;
  Invoicedate: string;
  Invoicedue: string;
  Terms: string;
  trigger: boolean;
  //table
  rows: Array<{
    id: number;
    item: string;
    description: string;
    quantity: number;
    price: number;
    amount: number;
  }>;
  //footer

  FooterNumber: string;
  FooterEmail: string;
  FooterWebsite: string;
}

const Preview: React.FC<PreviewProps> = ({
  rows,
  trigger,
  selectedFile,
  invoiceTitle,
  companyName,
  country,
  state,
  Trade,
  companyAddress,
  PhoneNumber,
  website,
  city,
  ecompanyName,
  ecountry,
  estate,
  ecompanyAddress,
  ePhoneNumber,
  ewebsite,
  ecity,
  invoicenumber,
  posonumber,
  Invoicedate,
  Invoicedue,
  Terms,
  FooterNumber,
  FooterEmail,
  FooterWebsite,
  selectedCurrency,
}) => {
  // Function to calculate total amount
  const calculateTotal = () => {
    return rows.reduce((total, row) => total + row.amount, 0);
  };

  // Function to get the current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "110%",
          marginTop: "20px",
        }}
      >
        {/* Header */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={12}
          sx={{
            padding: "30px 30px",
          }}
        >
          <Box
            sx={{
              width: "200px",
            }}
          >
            {/* image uploaded */}
            {selectedFile && (
              <img
                src={selectedFile}
                alt="Uploaded"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Box>
          <Box>
            <Typography
              fontWeight={"bold"}
              sx={{
                lineHeight: "50px",
                padding: "0px 10px",
                textAlign: "right",
              }}
              variant={"h2"}
            >
              {invoiceTitle}
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                color: "grey",
                textAlign: "right",
              }}
              variant={"subtitle2"}
            >
              {Trade}
            </Typography>
            <br />

            <Typography
              fontWeight={"bold"}
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                textAlign: "right",
                lineHeight: "20px",
              }}
              variant={"subtitle1"}
            >
              {companyName}
            </Typography>
            <Typography
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                textAlign: "right",
                lineHeight: "25px",
              }}
              variant={"subtitle1"}
            >
              {companyAddress}
            </Typography>
            <Typography
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                textAlign: "right",
                lineHeight: "25px",
              }}
              variant={"subtitle1"}
            >
              {state},{city},
            </Typography>

            <Typography
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                textAlign: "right",
                lineHeight: "25px",
              }}
              variant={"subtitle1"}
            >
              {country}
            </Typography>
            <br />
            <Typography
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                textAlign: "right",
                lineHeight: "25px",
              }}
              variant={"subtitle1"}
            >
              {PhoneNumber}
            </Typography>
            <Typography
              fontSize={"17px"}
              sx={{
                padding: "0px 10px",
                textAlign: "right",
                lineHeight: "25px",
              }}
              variant={"subtitle1"}
            >
              {website}
            </Typography>
          </Box>
          <Divider></Divider>
        </Stack>

        {/* table header content */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={12}
          sx={{
            padding: "20px 30px",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0}
            sx={{
              padding: "20px 0px",
              lineHeight: "10px",
            }}
          >
            <p
              style={{
                fontWeight: "bolder",
                color: "grey",
                fontSize: "17px",
                padding: "0px 10px",
                margin: "3px 0",
              }}
            >
              Bill to
            </p>
            <Typography
              fontWeight={"bold"}
              fontSize={"17px"}
              sx={{ padding: "0px 10px", lineHeight: "24px" }}
              variant={"subtitle1"}
            >
              {ecompanyName}
            </Typography>
            <Typography
              fontSize={"17px"}
              sx={{ padding: "0px 10px", lineHeight: "24px" }}
              variant={"subtitle1"}
            >
              {ecompanyAddress}
            </Typography>
            <Typography
              fontSize={"17px"}
              sx={{ padding: "0px 10px", lineHeight: "24px" }}
              variant={"subtitle1"}
            >
              {estate},{ecity},
            </Typography>

            <Typography
              fontSize={"17px"}
              sx={{ padding: "0px 10px", lineHeight: "24px" }}
              variant={"subtitle1"}
            >
              {ecountry}
            </Typography>
            <br />
            <br />
            <Typography
              fontSize={"17px"}
              sx={{ padding: "0px 10px", lineHeight: "10px" }}
              variant={"subtitle1"}
            >
              {ePhoneNumber}
            </Typography>
            <Typography
              fontSize={"17px"}
              sx={{ padding: "0px 10px" }}
              variant={"subtitle1"}
            >
              {ewebsite}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="cen ter"
            spacing={1}
          >
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={2}
            >
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Invoice Number:
              </p>

              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Invoice Date:
              </p>

              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Payment Due:
              </p>
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Amount Due {selectedCurrency}:
              </p>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={2.5}
            >
              <p>{invoicenumber}</p>
              <p>{Invoicedate}</p>
              <p>{Invoicedue}</p>
              <p>{calculateTotal()}</p>
            </Stack>
          </Stack>
        </Stack>
        {/* table */}
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: "#F55229",
              }}
            >
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Items
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "large",
                      lineHeight: "10px",
                    }}
                  >
                    {row.item}
                  </Box>
                  <br />
                  <Box>
                    <CustomTextField
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        lineHeight: "10px",
                        marginLeft: "-12px",
                        marginTop: "-20px",
                      }}
                      multiline
                      value={row.description}
                      variant="outlined"
                    />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "large",
                    lineHeight: "10px",
                  }}
                >
                  {row.quantity}
                </TableCell>
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "large",
                    lineHeight: "10px",
                  }}
                >
                  {row.price}
                </TableCell>
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "large",
                    lineHeight: "10px",
                  }}
                >
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0}
          sx={{
            padding: "50px 30px",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={1}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={13.9}
            >
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Subtotal:
              </p>
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {calculateTotal()}
              </p>
            </Stack>

            <Divider></Divider>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={17.2}
            >
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Total:
              </p>
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {calculateTotal()}
              </p>
            </Stack>
            <Divider></Divider>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Amount Due {selectedCurrency}:
              </p>

              <p
                style={{
                  padding: "0px 10px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {calculateTotal()}
              </p>
            </Stack>
          </Stack>
        </Stack>
        <Box>
          <p
            style={{
              fontWeight: "bolder",
              color: "grey",
              fontSize: "17px",
              padding: "0px 10px",
              margin: "5px 5px",
            }}
          >
            Notes/Terms
          </p>
          <CustomTextField
            fullWidth
            sx={{
              color: "black",
              fontWeight: "bold",
              lineHeight: "10px",

              marginTop: "-20px",
            }}
            multiline
            value={Terms}
            variant="outlined"
          />
        </Box>

        {/* Footer */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          spacing={10}
          sx={{
            padding: "20px",
            color: "grey",
            fontWeight: "bolder",
          }}
        >
          <Typography>{FooterWebsite}</Typography>
          <Typography>{FooterNumber}</Typography>
          <Typography>{FooterEmail}</Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default Preview;
