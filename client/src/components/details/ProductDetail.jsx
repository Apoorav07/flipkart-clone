import { Typography,Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";



const SmallText=styled(Box)`
 font-size:14px;
 vertical-align:baseline;
 & p {
  font-size:14px;
  margin-top:10px
 }
`

const StyledBadge=styled(Badge)`
margin-right:10px;
color:#00cc00;
font-size:15px
`;

const Columntext=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
margin-top:10px;
& > td {
  font-size:14px;
  border:none
}
`



const ProductDetail = ({product}) => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
 
  const date =new Date(new Date().getTime()+(5*24*60*60*1000))

  return ( 
    <>
        <Typography>{product.title.longTitle}</Typography>
                      <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>

                        8 Ratings & 1 Reviews
                        <Box component="span"><img src={fassured} alt="fassured" style={{width:77,marginLeft:20}} /></Box>
                        </Typography>
                        <Typography>
                          <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                          <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                          <Box component="span" style={{color:'green'}}>{product.price.discount}</Box>
                        </Typography>
                        <Typography>Available Offers</Typography>
                        <SmallText>
                          <Typography>
                            <StyledBadge/>Get Extra 20% off upto ₹50 on 1 item(s) T&C
                          </Typography>
                          <Typography>
                          <StyledBadge/>Get Extra 13% off (price inclusive of discount) T&C
                          </Typography>
                          <Typography>
                          <StyledBadge/>signup for flipkart pay later  T&C
                          </Typography>
                          <Typography>
                          <StyledBadge/>signup for flipkart pay later  T&C
                          </Typography>
                          <Typography>
                          <StyledBadge/>signup for flipkart pay later  T&C
                          </Typography>
                          <Typography>
                          <StyledBadge/>signup for flipkart pay later  T&C
                          </Typography>
                        </SmallText>
                        <Table>
                          <TableBody>
                            <Columntext>
                              <TableCell style={{color:'#878787'}}>
                                Delivery
                              </TableCell>
                              <TableCell style={{fontWeight:'600'}}>
                                Delivery By {date.toDateString()} | ₹40 
                              </TableCell>
                            </Columntext>
                            <Columntext>
                              <TableCell style={{color:'#878787'}}>
                                Warranty
                              </TableCell>
                              <TableCell >
                                No Warranty
                              </TableCell>
                            </Columntext>
                            <Columntext>
                              <TableCell style={{color:'#878787'}}>
                                Seller
                              </TableCell>
                              <TableCell >
                               <Box style={{color:'#2874f0'}} component="span">SuperComNet</Box>
                               <Typography>GST Invoice Available</Typography>
                               <Typography>
                                view More sellers starting  from ₹{product.price.cost} 
                               </Typography>
                              </TableCell>
                            </Columntext>
                            <Columntext>
                              <TableCell colSpan={2}  >
                                <img src={adURL} style={{width:390}} alt="image" />
                              </TableCell>
                            </Columntext>
                            <Columntext>
                              <TableCell style={{color:'#878787'}}>
                                Description
                              </TableCell>
                              <TableCell>
                                {product.description}
                              </TableCell>
                            </Columntext>
                          </TableBody>
                        </Table>
    </>
   );
}
 
export default ProductDetail;