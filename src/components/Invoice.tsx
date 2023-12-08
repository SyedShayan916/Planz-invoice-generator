import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Render2 from "./Render2";
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
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface TableRowData {
  id: number;
  item: string;
  description: string;
  quantity: number;
  price: number;
  amount: number;
}

function Invoice() {
  // Header
  const [invoiceTitle, setinvoiceTitle] = useState("INVOICE");
  const [Trade, setTrade] = useState("NTN: 4427434-3");
  const [companyName, setcompanyName] = useState("Plan Z Studio");
  const [companyAddress, setcompanyAddress] = useState(
    "Suite#103,First  Floor, CED Builing, IBA Karachi, Gulshan-e-Iqbal"
  );
  const [state, setstate] = useState("Sindh");
  const [city, setcity] = useState("Karachi");
  const [country, setcountry] = useState("Pakistan");
  const [PhoneNumber, setPhoneNumber] = useState("+923463888245");
  const [website, setwebsite] = useState("www.planzcreative.com");
  const handleClearinputs = () => {
    setinvoiceTitle("");
    setcompanyName("");
    setcountry("");
    setstate("");
    setTrade("");
    setcompanyAddress("");
    setPhoneNumber("");
    setwebsite("");
    setcity("");
  };

  // Body
  const [ecompanyName, setecompanyName] = useState("The Consorts");
  const [ecompanyAddress, setecompanyAddress] = useState("Anil Hasanali");
  const [estate, setestate] = useState("Hunza, Federally Administered Tribal");
  const [ecity, setecity] = useState("Areas");
  const [ecountry, setecountry] = useState("Pakistan");
  const [ePhoneNumber, setePhoneNumber] = useState("+92 332 8283926");
  const [invoicenumber, setinvoicenumber] = useState("2104022");
  const [posonumber, setposonumber] = useState("hansanali.anil@gmail.com");
  const [Invoicedate, setInvoicedate] = useState("2021-05-21");
  const [Invoicedue, setInvoicedue] = useState("2021-05-21");
  const [ewebsite, setewebsite] = useState("hansanali.anil@gmail.com");
  const [Terms, setTerms] = useState("hansanali.anil@gmail.com");
  const handleCleareinputs = () => {
    setinvoicenumber("");
    setposonumber("");
    setInvoicedate("");
    setInvoicedue("");
    setecompanyName("");
    setecountry("");
    setestate("");
    setecompanyAddress("");
    setePhoneNumber("");
    setewebsite("");
    setecity("");
  };

  // Footer
  const [FooterWebsite, setFooterWebsite] = useState(
    "wwww.planZ.creatives.com"
  );
  const [FooterNumber, setFooterNumber] = useState("923573882355");
  const [FooterEmail, setFooterEmail] = useState("info@planZcreativce.com");
  const handleFooterClearinputs = () => {
    setFooterWebsite("");
    setFooterNumber("");
    setFooterEmail("");
  };

  // Image
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const handleFileChange = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  // Table
  const [rows, setRows] = useState<TableRowData[]>([]);
  const [currentItem, setCurrentItem] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");
  const [currentQuantity, setCurrentQuantity] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  // Add row in table
  const handleAddRow = () => {
    if (currentItem.trim() && currentQuantity > 0 && currentPrice > 0) {
      const newRow: TableRowData = {
        id: Date.now(),
        item: currentItem.trim(),
        description: currentDescription.trim(),
        quantity: currentQuantity,
        price: currentPrice,
        amount: currentQuantity * currentPrice,
      };

      setRows([...rows, newRow]);
      setCurrentItem("");
      setCurrentDescription("");
      setCurrentQuantity(0);
      setCurrentPrice(0);
    }
  };

  // Delete row in table
  const handleDeleteRow = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  // calculate total
  const calculateSubtotal = () => {
    return rows.reduce((total, row) => total + row.amount, 0);
  };
  const [selectedCurrency, setselectedCurrency] = useState<string>("(PKR)");

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setselectedCurrency(event.target.value);
  };
  const [opencompanypopup, setOpencompanypopup] = React.useState(false);
  const [opeclientpopup, setOpenclientpopup] = React.useState(false);
  const [openfooterpopup, setOpenfooterpopup] = React.useState(false);
  const handlecompanypopup = () => {
    setOpencompanypopup(true);
  };
  const handleclientpopup = () => {
    setOpenclientpopup(true);
  };
  const handlefooterpopup = () => {
    setOpenfooterpopup(true);
  };

  const handleClose = () => {
    setOpencompanypopup(false);
    setOpenclientpopup(false);
    setOpenfooterpopup(false);
  };

  return (
    <>
      {/* popup for your company details */}

      <Dialog onClose={handleClose} open={opencompanypopup}>
        <DialogTitle>
          <div>Company's Detail</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{ fontWeight: "bold" }}>
              <input
                placeholder={"Your Company"}
                value={companyName}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "4px",
                  transition: "border-color 0.3s",
                  fontSize: "16px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setcompanyName(e.target.value)}
              />

              <CustomTextField
                multiline
                maxRows={3}
                placeholder={"Company's Adress"}
                value={companyAddress}
                style={{
                  width: "100%",
                  display: "flex",
                  marginLeft: "-2.5px",
                  transition: "border-color 0.3s",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setcompanyAddress(e.target.value)}
              />

              <input
                placeholder={"State"}
                value={state}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "4px",
                  transition: "border-color 0.3s",
                  fontSize: "16px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setstate(e.target.value)}
              />

              <input
                placeholder={"City"}
                value={city}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "4px",
                  transition: "border-color 0.3s",
                  fontSize: "16px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setcity(e.target.value)}
              />

              <input
                placeholder={"Country"}
                value={country}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "4px",
                  transition: "border-color 0.3s",
                  fontSize: "16px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setcountry(e.target.value)}
              />
              <input
                placeholder={"Phone Number"}
                value={PhoneNumber}
                style={{
                  width: "290px",
                  display: "flex",
                  margin: "4px",
                  padding: "10px",

                  transition: "border-color 0.3s",
                  fontSize: "16px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setPhoneNumber(e.target.value)}
              />
              <input
                placeholder={"Website"}
                value={website}
                style={{
                  width: "290px",
                  display: "flex",
                  margin: "4px",
                  padding: "10px",

                  transition: "border-color 0.3s",
                  fontSize: "16px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setwebsite(e.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={handleClearinputs}>
            Clear inputs
          </Button>
        </DialogActions>
      </Dialog>

      {/* popup for Client's company details */}

      <Dialog
        sx={{}}
        onClose={handleClose}
        open={opeclientpopup}
        // setOpenPopup={setopenPopup}
      >
        <DialogTitle>
          <div style={{ fontWeight: "bold" }}>Client's Detail</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <input
                placeholder={"Your Company"}
                value={ecompanyName}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setecompanyName(e.target.value)}
              />
              <CustomTextField
                multiline
                maxRows={3}
                placeholder={"Company's Adress"}
                value={companyAddress}
                style={{
                  width: "100%",
                  display: "flex",
                  marginLeft: "-2.5px",
                  transition: "border-color 0.3s",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setecompanyAddress(e.target.value)}
              />

              <input
                placeholder={"State"}
                value={estate}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setestate(e.target.value)}
              />

              <input
                placeholder={"City"}
                value={ecity}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setecity(e.target.value)}
              />

              <input
                placeholder={"Country"}
                value={ecountry}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setecountry(e.target.value)}
              />
              <input
                placeholder={"Phone Number"}
                value={ePhoneNumber}
                style={{
                  width: "290px",
                  display: "flex",
                  margin: "0px",
                  padding: "10px",

                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setePhoneNumber(e.target.value)}
              />
              <input
                placeholder={"Website"}
                value={ewebsite}
                style={{
                  width: "290px",
                  display: "flex",
                  margin: "0px",
                  padding: "10px",

                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setewebsite(e.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCleareinputs}>
            Clear inputs
          </Button>
        </DialogActions>
      </Dialog>

      {/* popup for footer details */}

      <Dialog
        sx={{}}
        onClose={handleClose}
        open={openfooterpopup}
        // setOpenPopup={setopenPopup}
      >
        <DialogTitle>
          <div style={{ fontWeight: "bold" }}>Footer</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <input
                placeholder={"Your Company"}
                value={FooterWebsite}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setFooterWebsite(e.target.value)}
              />

              <input
                placeholder={"Company's Adress"}
                value={FooterNumber}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setFooterNumber(e.target.value)}
              />

              <input
                placeholder={"State"}
                value={FooterEmail}
                style={{
                  width: "290px",
                  display: "flex",
                  padding: "10px",
                  margin: "0px",
                  transition: "border-color 0.3s",
                  fontSize: "18px",
                  textAlign: "left",
                  border: "none",
                }}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setFooterEmail(e.target.value)}
              />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              ></Stack>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleFooterClearinputs}>
            Clear inputs
          </Button>
        </DialogActions>
      </Dialog>

      <Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          spacing={1}
          style={{
            width: "1000px",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <h5>Select currency</h5>
          <form>
            <select
              id="fontSelector"
              onChange={handleCurrencyChange}
              value={selectedCurrency}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "15px",
              }}
            >
              <option value="(PKR)">PKR</option>
              <option value="(USD)">USD</option>
            </select>
          </form>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            style={{
              width: "1000px",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="center"
              sx={{}}
            ></Stack>
            {/* Header */}
            <Paper
              elevation={3}
              sx={{
                width: "110%",
                marginTop: "20px",
              }}
            >
              {/* Header Label */}
              <Box
                sx={{
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.12)",
                  borderRadius: "5px 5px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Business address and contact details, title, summary, and logo
                </Typography>
              </Box>
              {/* Header content */}

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px 20px",
                }}
              >
                {/* image */}
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

                  <Button
                    component="label"
                    variant="contained"
                    sx={{
                      height: "45px",
                      padding: "20px",
                      width: "150px",
                    }}
                  >
                    Upload file
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileChange}
                    />
                  </Button>
                </Box>
                {/* Content */}

                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  spacing={0}
                  sx={{
                    padding: "20px 0px",
                  }}
                >
                  <input
                    placeholder={"Inovice"}
                    value={invoiceTitle}
                    style={{
                      padding: "7px 10px",
                      width: "290px",
                      transition: "border-color 0.3s",
                      border: "none",
                      alignItems: "right",
                      fontSize: "35px",
                      color: "black",
                      textAlign: "right",
                    }}
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => setinvoiceTitle(e.target.value)}
                  />
                  <input
                    placeholder={"Trade licence/registration number"}
                    value={Trade}
                    style={{
                      width: "290px",
                      display: "flex",
                      padding: "13px 10px",
                      margin: "1px 0px",
                      transition: "border-color 0.3s",
                      fontSize: "18px",
                      textAlign: "right",
                      border: "none",
                    }}
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => setTrade(e.target.value)}
                  />

                  <Typography
                    fontWeight={"bold"}
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {companyName}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {companyAddress}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {city}, {state}
                  </Typography>

                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {country}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {PhoneNumber}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {website}
                  </Typography>

                  <Button
                    variant="outlined"
                    onClick={handlecompanypopup}
                    sx={{
                      margin: "20px 10px",
                    }}
                  >
                    edit field
                  </Button>
                </Stack>
              </Box>
            </Paper>

            {/* Body */}
            <Paper
              elevation={6}
              sx={{
                width: "110%",
                marginTop: "20px",
                padding: "20px 0px",
                borderRadius: "10px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={0}
                sx={{
                  padding: "0 20px",
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={0}
                  sx={{
                    padding: "20px 0px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "grey",
                      fontSize: "15px",
                      padding: "0px 10px",
                      margin: "3px 0",
                    }}
                  >
                    Bill to
                  </p>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {ecompanyName}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {ecompanyAddress}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {estate},{ecity},
                  </Typography>

                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {ecountry}
                  </Typography>
                  <br />
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {ePhoneNumber}
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    sx={{ padding: "0px 10px" }}
                    variant={"subtitle1"}
                  >
                    {ewebsite}
                  </Typography>

                  <Button
                    variant="outlined"
                    onClick={handleclientpopup}
                    sx={{
                      margin: "20px 10px",
                    }}
                  >
                    edit field
                  </Button>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  spacing={1}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0}
                  >
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "grey",
                        fontSize: "17px",
                        marginRight: "15px",
                      }}
                    >
                      Invoice number
                    </p>
                    <input
                      style={{
                        borderRadius: "5px",
                        padding: "13px 18px",
                        margin: "10px 0",
                        marginLeft: "15px",
                      }}
                      value={invoicenumber}
                      onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                      }) => setinvoicenumber(e.target.value)}
                      type="number"
                    ></input>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0}
                  >
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "grey",
                        fontSize: "17px",
                        margin: "3px 0",
                      }}
                    >
                      P.O./S.O. <br /> number
                    </p>
                    <input
                      style={{
                        borderRadius: "5px",
                        padding: "13px 18px",
                        margin: "10px 0",
                        marginLeft: "15px",
                      }}
                      value={posonumber}
                      onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                      }) => setposonumber(e.target.value)}
                      type="number"
                    ></input>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0}
                  >
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "grey",
                        fontSize: "17px",
                        margin: "3px 0",
                      }}
                    >
                      Invoice date
                    </p>
                    <input
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: "bolder",
                        color: "grey",
                        fontSize: "17px",
                        borderRadius: "5px",
                        padding: "13px 27px",
                        margin: "10px 0",
                        marginLeft: "15px",
                      }}
                      value={Invoicedate}
                      onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                      }) => setInvoicedate(e.target.value)}
                      type="date"
                    ></input>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems=""
                    spacing={0}
                  >
                    <Box>
                      <p
                        style={{
                          fontWeight: "bolder",
                          color: "grey",
                          fontSize: "17px",
                          margin: "22px 0",
                        }}
                      >
                        Invoice due
                      </p>
                    </Box>
                    <Box>
                      <input
                        style={{
                          fontFamily: "'Roboto', sans-serif",
                          fontWeight: "bolder",
                          color: "grey",
                          fontSize: "17px",
                          borderRadius: "5px",
                          padding: "13px 27px",
                          margin: "10px 0",
                          marginLeft: "15px",
                        }}
                        value={Invoicedue}
                        onChange={(e: {
                          target: { value: React.SetStateAction<string> };
                        }) => setInvoicedue(e.target.value)}
                        type="date"
                      ></input>
                      <p
                        style={{
                          color: "grey",
                          fontSize: "17px",

                          margin: "0px",
                          paddingLeft: "20px",
                        }}
                      >
                        On Receipt
                      </p>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>

              {/* Table */}

              <Box
                sx={{
                  margin: "50px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "bolder",
                    fontSize: "17px",
                  }}
                >
                  <Table style={{ borderBottom: "2px solid #f7f7f7" }}>
                    <TableHead>
                      <TableRow
                        sx={{
                          borderRadius: "30px",
                          background: "rgba(0, 0, 0, 0.12)",
                        }}
                      >
                        <TableCell
                          sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: "bolder",
                            fontSize: "17px",
                            paddingLeft: "20px",
                          }}
                        >
                          Items
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: "bolder",
                            fontSize: "17px",
                          }}
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: "bolder",
                            fontSize: "17px",
                          }}
                        >
                          Price
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: "bolder",
                            fontSize: "17px",
                          }}
                        >
                          Amount
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: "bolder",
                            fontSize: "17px",
                          }}
                        >
                          Delete
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell
                            sx={{
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          >
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="flex-start"
                            >
                              <p
                                style={{
                                  fontSize: "17px",
                                }}
                              >
                                {row.item}
                              </p>
                              <TextField
                                value={row.description}
                                multiline
                                maxRows={12}
                                style={{
                                  borderRadius: "10px",
                                  fontFamily: "'Roboto', sans-serif",
                                  fontWeight: "bolder",
                                  fontSize: "17px",
                                }}
                              />
                            </Stack>
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          >
                            {row.quantity}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          >
                            {row.price}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          >
                            {row.amount}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          >
                            <Button
                              onClick={() => handleDeleteRow(row.id)}
                              variant="contained"
                              color="error"
                            >
                              X
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}

                      <TableRow>
                        <TableCell
                          sx={
                            {
                              // paddingBottom: "250px",
                            }
                          }
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            spacing={0}
                          >
                            <input
                              type="text"
                              value={currentItem}
                              onChange={(e) => setCurrentItem(e.target.value)}
                              style={{
                                border: "none",
                                fontWeight: "bold",
                                fontSize: "17px",
                                padding: "10px 5px",
                              }}
                              placeholder="Item"
                            />
                            <TextField
                              value={currentDescription}
                              onChange={(e) =>
                                setCurrentDescription(e.target.value)
                              }
                              multiline
                              maxRows={12}
                              style={{
                                borderRadius: "10px",
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: "bolder",
                                fontSize: "17px",
                              }}
                            />
                          </Stack>
                        </TableCell>
                        <TableCell
                          sx={
                            {
                              // paddingBottom: "250px",
                            }
                          }
                        >
                          <Input
                            type="number"
                            value={currentQuantity}
                            onChange={(e) =>
                              setCurrentQuantity(parseInt(e.target.value))
                            }
                            sx={{
                              borderRadius: "10px",
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={
                            {
                              // paddingBottom: "250px",
                            }
                          }
                        >
                          <Input
                            type="number"
                            value={currentPrice}
                            onChange={(e) =>
                              setCurrentPrice(parseFloat(e.target.value))
                            }
                            sx={{
                              borderRadius: "10px",
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: "bolder",
                              fontSize: "17px",
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            // paddingBottom: "250px",

                            borderRadius: "10px",
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: "bolder",
                            fontSize: "17px",
                          }}
                        >
                          {currentQuantity * currentPrice}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={85}
                    padding={"20px 0"}
                  >
                    <Box
                      sx={{
                        paddingLeft: "20px",
                      }}
                    >
                      <Button
                        onClick={handleAddRow}
                        variant="outlined"
                        color="primary"
                      >
                        Add Row
                      </Button>
                    </Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                      fontSize={"larger"}
                    >
                      <p>Subtotal:</p>
                      <p>{calculateSubtotal()}</p>
                    </Stack>
                  </Stack>
                </div>
              </Box>
              <Box
                sx={{
                  margin: "-20px 0px",
                  padding: "0px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bolder",
                    color: "grey",
                    fontSize: "17px",
                    padding: "10px 20px",
                    margin: "3px 0",
                  }}
                >
                  Notes / Terms
                </p>

                <TextField
                  multiline
                  fullWidth
                  rows={5}
                  maxRows={12}
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "bolder",
                    fontSize: "17px",
                  }}
                  value={Terms}
                  onChange={(e) => setTerms(e.target.value)}
                />
              </Box>
            </Paper>

            {/* Footer */}
            <Paper
              elevation={3}
              sx={{
                width: "110%",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.12)",
                  borderRadius: "5px 5px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Footer
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px 10px",
                }}
              >
                {/* inputs */}

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={12}
                  sx={{
                    padding: "20px 0px",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={7}
                  >
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"17px"}
                      sx={{ padding: "0px 10px" }}
                      variant={"subtitle1"}
                    >
                      *{FooterWebsite}
                    </Typography>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"17px"}
                      sx={{ padding: "0px 10px" }}
                      variant={"subtitle1"}
                    >
                      *{FooterNumber}
                    </Typography>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"17px"}
                      sx={{ padding: "0px 10px" }}
                      variant={"subtitle1"}
                    >
                      *{FooterEmail}
                    </Typography>
                  </Stack>

                  <Button variant="outlined" onClick={handlefooterpopup}>
                    Edit Footer
                  </Button>
                </Stack>
              </Box>
            </Paper>

            {/* to be printed */}
          </Stack>
          <Render2
            rows={rows}
            invoiceTitle={invoiceTitle}
            companyName={companyName}
            country={country}
            state={state}
            Trade={Trade}
            companyAddress={companyAddress}
            PhoneNumber={PhoneNumber}
            website={website}
            city={city}
            selectedFile={selectedFile}
            ecompanyName={ecompanyName}
            ecountry={ecountry}
            estate={estate}
            ecompanyAddress={ecompanyAddress}
            ePhoneNumber={ePhoneNumber}
            ewebsite={ewebsite}
            ecity={ecity}
            invoicenumber={invoicenumber}
            posonumber={posonumber}
            Invoicedate={Invoicedate}
            Invoicedue={Invoicedue}
            Terms={Terms}
            FooterNumber={FooterNumber}
            FooterEmail={FooterEmail}
            FooterWebsite={FooterWebsite}
            selectedCurrency={selectedCurrency}
          />
        </Stack>
      </Box>
    </>
  );
}

export default Invoice;
