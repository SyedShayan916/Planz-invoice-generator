import React from "react";
import img from "./1.png";
import { Stack, Button } from "@mui/material";

import * as renderer from "@react-pdf/renderer";
import RobotoBold from "./Fonts/Roboto-Bold.ttf";

renderer.Font.register({
  family: "Roboto",
  src: RobotoBold,
  fontWeight: "bold",
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
const Render2: React.FC<PreviewProps> = ({
  rows,
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

  return (
    <>
      {/* popup for PDF preview */}
      {/* <Box
        sx={{
          maxWidth: "600px",
        }}
      >
        <Dialog
          sx={{}}
          onClose={handleClose}
          open={openpreviewpopup}
          // setOpenPopup={setopenPopup}
        >
          <DialogTitle>
            <div>Preview</div>
          </DialogTitle>
          <DialogContent sx={{ width: "500px" }}>
            <Preview
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
              trigger={false}
            ></Preview>
          </DialogContent>
        </Dialog>
      </Box> */}

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <renderer.PDFDownloadLink
          document={
            <>
              <renderer.Document>
                <renderer.Page style={{ paddingBottom: "70px" }} size="A4">
                  {/* Header */}
                  <renderer.View
                    fixed
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px",
                      borderBottom: "1px solid #f7f7f7",
                    }}
                  >
                    <renderer.Image
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                      src={selectedFile || img}
                    />
                    <renderer.View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "right",
                        alignItems: "flex-end",
                      }}
                    >
                      <renderer.Text
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        {invoiceTitle}
                      </renderer.Text>
                      <renderer.Text
                        style={{
                          fontSize: "10px",
                          color: "grey",
                          paddingBottom: "15px",
                        }}
                      >
                        {Trade}
                      </renderer.Text>
                      <renderer.Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        {companyName}
                      </renderer.Text>
                      <renderer.Text
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {companyAddress}
                      </renderer.Text>
                      <renderer.Text
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {state},{city},
                      </renderer.Text>

                      <renderer.Text
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {country}
                      </renderer.Text>

                      <renderer.Text
                        style={{
                          paddingTop: "15px",
                          fontSize: "10px",
                        }}
                      >
                        {PhoneNumber}
                      </renderer.Text>
                      <renderer.Text
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {website}
                      </renderer.Text>
                    </renderer.View>
                  </renderer.View>
                  {/* Body */}
                  {/* Content above Table */}
                  <renderer.View>
                    <renderer.View
                      fixed
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        padding: "20px",
                      }}
                    >
                      <renderer.View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "right",
                          alignItems: "flex-start",
                        }}
                      >
                        <renderer.Text
                          style={{
                            fontSize: "12px",
                            color: "grey",
                          }}
                        >
                          Bill To
                        </renderer.Text>
                        <renderer.Text
                          style={{
                            fontSize: "10px",
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                          }}
                        >
                          {ecompanyName}
                        </renderer.Text>

                        <renderer.Text
                          style={{
                            fontSize: "10px",
                          }}
                        >
                          {ecompanyAddress}
                        </renderer.Text>
                        <renderer.Text
                          style={{
                            fontSize: "10px",
                          }}
                        >
                          {estate},
                        </renderer.Text>
                        <renderer.Text
                          style={{
                            fontSize: "10px",
                          }}
                        >
                          {ecity},
                        </renderer.Text>
                        <renderer.Text
                          style={{
                            fontSize: "10px",
                          }}
                        >
                          {ecountry}
                        </renderer.Text>

                        <renderer.Text
                          style={{
                            paddingTop: "15px",
                            fontSize: "10px",
                          }}
                        >
                          {ePhoneNumber}
                        </renderer.Text>
                        <renderer.Text
                          style={{
                            fontSize: "10px",
                          }}
                        >
                          {ewebsite}
                        </renderer.Text>
                      </renderer.View>
                      <renderer.View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <renderer.View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            paddingRight: "10px",
                          }}
                        >
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Invoice Number:
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Invoice Date:
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Payment Due:
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Amount Due {selectedCurrency}:
                            </renderer.Text>
                          </renderer.View>
                        </renderer.View>
                        <renderer.View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingRight: "20px",
                          }}
                        >
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                textAlign: "right",
                                fontSize: "10px",
                              }}
                            >
                              {invoicenumber}
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                textAlign: "right",
                                fontSize: "10px",
                              }}
                            >
                              {Invoicedate}
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                textAlign: "right",
                                fontSize: "10px",
                              }}
                            >
                              {Invoicedue}
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              paddingBottom: "10px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                paddingTop: "1.5px",
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              {calculateTotal()}
                            </renderer.Text>
                          </renderer.View>
                        </renderer.View>
                      </renderer.View>
                    </renderer.View>
                  </renderer.View>
                  {/* Table */}
                  <renderer.View>
                    <renderer.View
                      fixed
                      style={{
                        backgroundColor: "#F55229",
                        display: "flex",
                        flexDirection: "row",

                        justifyContent: "space-between",
                        width: "100%",
                        color: "white",
                        padding: "5px 9px",
                        fontSize: "10px",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      {/* <renderer.Text style={{ paddingRight: "170px" }}>
                      Items
                    </renderer.Text>
                    <renderer.Text style={{ paddingRight: "210px" }}>
                      Quantity
                    </renderer.Text>
                    <renderer.Text style={{ paddingRight: "194px" }}>
                      Price
                    </renderer.Text>
                    <renderer.Text>Amount</renderer.Text> */}
                      <renderer.Text style={{ width: "220px" }}>
                        Items
                      </renderer.Text>
                      <renderer.Text>Quantity</renderer.Text>
                      <renderer.Text>Price</renderer.Text>
                      <renderer.Text style={{ paddingRight: "20px" }}>
                        Amount
                      </renderer.Text>
                    </renderer.View>
                    {rows.map((row) => (
                      <renderer.View key={row.id}>
                        <renderer.View
                          break
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            padding: "10px 20px",
                            borderBottom: "1px solid #f7f7f7",
                          }}
                        >
                          <renderer.View
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <renderer.Text
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                                fontSize: "10px",
                              }}
                            >
                              {row.item}
                            </renderer.Text>
                            <renderer.View style={{ width: "200px" }}>
                              <renderer.Text
                                style={{
                                  color: "black",
                                  fontSize: "9px",
                                }}
                              >
                                {row.description}
                              </renderer.Text>
                            </renderer.View>
                          </renderer.View>
                          <renderer.Text
                            style={{
                              color: "black",
                              fontSize: "10px",
                            }}
                          >
                            {row.quantity}
                          </renderer.Text>
                          <renderer.Text
                            style={{
                              color: "black",
                              fontSize: "10px",
                            }}
                          >
                            {row.price}
                          </renderer.Text>
                          <renderer.Text
                            style={{
                              color: "black",
                              fontSize: "10px",
                              paddingRight: "20px",
                            }}
                          >
                            {row.amount}
                          </renderer.Text>
                        </renderer.View>
                      </renderer.View>
                    ))}
                    {/* Content below Table */}
                    <renderer.View>
                      <renderer.View
                        break
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          paddingTop: "20px",
                        }}
                      >
                        <renderer.View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                          }}
                        >
                          <renderer.View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              borderBottom: "1px solid grey",
                              padding: "10px 40px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                padding: "0px 10px",
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Subtotal:
                            </renderer.Text>
                            <renderer.Text
                              style={{
                                padding: "0px 12px",
                                textAlign: "right",
                                fontSize: "10px",
                              }}
                            >
                              {calculateTotal()}
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              borderBottom: "1px solid grey",
                              padding: "10px 48.9px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                padding: "0px 15px",
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Total:
                            </renderer.Text>
                            <renderer.Text
                              style={{
                                paddingLeft: "8.5px",
                                textAlign: "right",
                                fontSize: "10px",
                              }}
                            >
                              {calculateTotal()}
                            </renderer.Text>
                          </renderer.View>
                          <renderer.View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: "10px 0px",
                            }}
                          >
                            <renderer.Text
                              style={{
                                paddingRight: "15px",
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              Amount Due {selectedCurrency}:
                            </renderer.Text>
                            <renderer.Text
                              style={{
                                padding: "0px 10px",
                                textAlign: "right",
                                fontSize: "10px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                              }}
                            >
                              {calculateTotal()}
                            </renderer.Text>
                          </renderer.View>
                        </renderer.View>
                      </renderer.View>
                      <renderer.View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "30px 20px",
                        }}
                      >
                        <renderer.Text
                          style={{
                            fontSize: "10px",
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                          }}
                        >
                          Notes/Terms
                        </renderer.Text>
                        <renderer.View style={{ width: "500px" }}>
                          <renderer.Text
                            style={{
                              color: "black",
                              paddingTop: "10px",
                              fontSize: "10px",
                            }}
                          >
                            {Terms}
                          </renderer.Text>
                        </renderer.View>
                      </renderer.View>
                    </renderer.View>
                  </renderer.View>

                  {/* Footer */}
                  <renderer.Text
                    style={{
                      position: "absolute",
                      fontSize: 10,
                      bottom: 30,
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      color: "grey",
                    }}
                    render={({ pageNumber, totalPages }) =>
                      `${FooterWebsite}                            ${FooterNumber}                            ${FooterEmail}\n
                     Page ${pageNumber} of ${totalPages} for Invoice #${invoicenumber}`
                    }
                    fixed
                  ></renderer.Text>
                </renderer.Page>
              </renderer.Document>
            </>
          }
          fileName={"invoice.pdf"}
        >
          <Button
            variant="outlined"
            style={{
              margin: "40px",
              marginRight: "0px",
            }}
          >
            Download pdf
          </Button>
        </renderer.PDFDownloadLink>
        {/* <Button
          variant="outlined"
          onClick={handlepreviewpopup}
          style={{
            marginBottom: "40px",
          }}
        >
          Preview
        </Button> */}
      </Stack>

      <div style={{ background: "#e9e9e9", width: "100%", display: "none" }}>
        <renderer.Document>
          <renderer.Page size="A4">
            {/* Header */}
            <renderer.View
              fixed
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: "20px",
                borderBottom: "1px solid grey",
              }}
            >
              <renderer.Image
                style={{
                  width: "100px",
                  height: "100px",
                }}
                src={selectedFile || img}
              />
              <renderer.View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                  alignItems: "flex-end",
                }}
              >
                <renderer.Text
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    fontSize: "30px",
                  }}
                >
                  {invoiceTitle}
                </renderer.Text>
                <renderer.Text
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    fontSize: "10px",
                    color: "grey",
                    paddingBottom: "15px",
                  }}
                >
                  {Trade}
                </renderer.Text>
                <renderer.Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                  }}
                >
                  {companyName}
                </renderer.Text>
                <renderer.Text
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {companyAddress}
                </renderer.Text>
                <renderer.Text
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {state},{city},
                </renderer.Text>

                <renderer.Text
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {country}
                </renderer.Text>

                <renderer.Text
                  style={{
                    paddingTop: "15px",
                    fontSize: "10px",
                  }}
                >
                  {PhoneNumber}
                </renderer.Text>
                <renderer.Text
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {website}
                </renderer.Text>
              </renderer.View>
            </renderer.View>
            {/* Body */}
            {/* Content above Table */}
            <renderer.View>
              <renderer.View
                fixed
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  padding: "20px",
                }}
              >
                <renderer.View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "right",
                    alignItems: "flex-start",
                  }}
                >
                  <renderer.Text
                    style={{
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    Bill To
                  </renderer.Text>
                  <renderer.Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {ecompanyName}
                  </renderer.Text>

                  <renderer.Text
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {ecompanyAddress}
                  </renderer.Text>
                  <renderer.Text
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {estate},
                  </renderer.Text>
                  <renderer.Text
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {ecity},
                  </renderer.Text>
                  <renderer.Text
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {ecountry}
                  </renderer.Text>

                  <renderer.Text
                    style={{
                      paddingTop: "15px",
                      fontSize: "10px",
                    }}
                  >
                    {ePhoneNumber}
                  </renderer.Text>
                  <renderer.Text
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {ewebsite}
                  </renderer.Text>
                </renderer.View>
                <renderer.View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <renderer.View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      paddingRight: "20px",
                    }}
                  >
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        Invoice Number:
                      </renderer.Text>
                    </renderer.View>
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        Invoice Date:
                      </renderer.Text>
                    </renderer.View>
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        Payment Due:
                      </renderer.Text>
                    </renderer.View>
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        Amount Due {selectedCurrency}:
                      </renderer.Text>
                    </renderer.View>
                  </renderer.View>
                  <renderer.View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      paddingRight: "50px",
                    }}
                  >
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        {invoicenumber}
                      </renderer.Text>
                    </renderer.View>
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        {Invoicedate}
                      </renderer.Text>
                    </renderer.View>
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        {Invoicedue}
                      </renderer.Text>
                    </renderer.View>
                    <renderer.View
                      style={{
                        paddingBottom: "10px",
                      }}
                    >
                      <renderer.Text
                        style={{
                          textAlign: "right",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        {calculateTotal()}
                      </renderer.Text>
                    </renderer.View>
                  </renderer.View>
                </renderer.View>
              </renderer.View>
            </renderer.View>
            {/* Table */}
            <renderer.View>
              <renderer.View
                style={{
                  backgroundColor: "#F55229",
                  width: "100%",
                  color: "white",
                  padding: "10px 17px",
                  margin: "5px 0",
                }}
              >
                <renderer.Text style={{ paddingRight: "370px" }}>
                  Items
                </renderer.Text>
                <renderer.Text style={{ paddingRight: "210px" }}>
                  Quantity
                </renderer.Text>
                <renderer.Text style={{ paddingRight: "194px" }}>
                  Price
                </renderer.Text>
                <renderer.Text>Amount</renderer.Text>
              </renderer.View>
              {rows.map((row) => (
                <renderer.View key={row.id}>
                  <renderer.View
                    break
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 20px",
                    }}
                  >
                    <renderer.View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <renderer.Text
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                          fontSize: "10px",
                        }}
                      >
                        {row.item}
                      </renderer.Text>
                      <renderer.View style={{ width: "200px" }}>
                        <renderer.Text
                          style={{
                            color: "black",
                            fontSize: "10px",
                          }}
                        >
                          {row.description}
                        </renderer.Text>
                      </renderer.View>
                    </renderer.View>
                    <renderer.Text
                      style={{
                        color: "black",
                        fontSize: "10px",
                      }}
                    >
                      {row.quantity}
                    </renderer.Text>
                    <renderer.Text
                      style={{
                        color: "black",
                        fontSize: "10px",
                      }}
                    >
                      {row.price}
                    </renderer.Text>
                    <renderer.Text
                      style={{
                        color: "black",
                        fontSize: "10px",
                      }}
                    >
                      {row.amount}
                    </renderer.Text>
                  </renderer.View>
                </renderer.View>
              ))}
            </renderer.View>
            {/* Content below Table */}
            <renderer.View>
              <renderer.View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <renderer.View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  }}
                >
                  <renderer.View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid grey",
                      padding: "10px 40px",
                    }}
                  >
                    <renderer.Text
                      style={{
                        padding: "0px 10px",
                        textAlign: "right",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Subtotal:
                    </renderer.Text>
                    <renderer.Text
                      style={{
                        padding: "0px 10px",
                        textAlign: "right",
                        fontSize: "10px",
                      }}
                    >
                      {calculateTotal()}
                    </renderer.Text>
                  </renderer.View>
                  <renderer.View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid grey",
                      padding: "10px 48.9px",
                    }}
                  >
                    <renderer.Text
                      style={{
                        padding: "0px 15px",
                        textAlign: "right",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Total:
                    </renderer.Text>
                    <renderer.Text
                      style={{
                        paddingLeft: "8.5px",
                        textAlign: "right",
                        fontSize: "10px",
                      }}
                    >
                      {calculateTotal()}
                    </renderer.Text>
                  </renderer.View>
                  <renderer.View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                  >
                    <renderer.Text
                      style={{
                        padding: "0px 8.5px",
                        textAlign: "right",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Amount Due {selectedCurrency}:
                    </renderer.Text>
                    <renderer.Text
                      style={{
                        padding: "0px 10px",
                        textAlign: "right",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {calculateTotal()}
                    </renderer.Text>
                  </renderer.View>
                </renderer.View>
              </renderer.View>
              <renderer.View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px 20px",
                }}
              >
                <renderer.Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Notes/Terms
                </renderer.Text>
                <renderer.View style={{ width: "200px" }}>
                  <renderer.Text
                    style={{
                      color: "black",
                      fontSize: "10px",
                    }}
                  >
                    {Terms}
                  </renderer.Text>
                </renderer.View>
              </renderer.View>
            </renderer.View>

            {/* Footer */}
            <renderer.Text
              style={{
                position: "absolute",
                fontSize: 10,
                bottom: 30,
                left: 0,
                right: 0,
                textAlign: "center",
                color: "grey",
              }}
              render={({ pageNumber, totalPages }) =>
                `${FooterWebsite}                            ${FooterNumber}                            ${FooterEmail}\n
                     Page ${pageNumber} of ${totalPages} for Invoice #${invoicenumber}`
              }
              fixed
            ></renderer.Text>
          </renderer.Page>
        </renderer.Document>
      </div>
    </>
  );
};

export default Render2;
