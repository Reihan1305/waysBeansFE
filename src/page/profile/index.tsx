import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import TransactionCard from "../../component/card/TransactionCard";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { allTransactionByUser } from "../../store/async/allTransactionByUserAsync";

const Profile = () => {
  const { profile } = useAppSelector((state) => state.auth);
  const [isloading, setIsLoading] = React.useState(true);
  const transaction = useAppSelector(
    (state) => state.allTransactionUser.Transaction
  );
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(allTransactionByUser())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);
  console.log(transaction);

  if(isloading){
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", marginBottom: "32px", gap: "100px" }}>
        <Box sx={{ marginRight: "32px" }}>
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{ color: "#613D2B", marginBottom: "16px" }}
          >
            My Profile
          </Typography>
          <Box sx={{ display: "flex", alignItems: "start", height: "200px" }}>
            <img
              src={
                profile.photoProfile
                  ? profile.photoProfile
                  : "https://s3-alpha-sig.figma.com/img/5736/4ad6/6ebf751e7f102311d3ba8137ef22382a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHnLUrlZ3Tvt-K1Dj7Cbmtm5bq1x07pHqw0BYeVBmfj1YVAee8RBPLV27ycJz1AEA4GUKuF71wVAttL9kcWbSRJhJGpc1bj2U7ohJVBu0JBQkty8TwN-W6nBdvFALXbmoN3pNP2ZxFJEexxj4XvyUygvkCGrsjYd1Gd-oDuViIw8guAf9~lUk--cX39V3UZ5rzGYN90JiJPG9F~HMdVcoMhXq-UNLhrrZlSn4iC89EzkA8LQkPYyq5P~YbalmbsP8WrEchuJayuvCXi8X6zdn1j0XLAhUFL9qEqfWC52iGPWs0QSFJtHJBG~E2oY3Yof0hfmqmvDthZGImCOHSy4zQ__"
              }
              width="170px"
              height="100%"
              style={{ marginTop: "5px", objectFit: "cover" }}
              alt="Profile"
            />
            <Box marginLeft="16px">
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ color: "#613D2B" }}
              >
                Full Name
              </Typography>
              <Typography sx={{ marginBottom: "8px" }}>
                {profile.fullname}
              </Typography>
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ color: "#613D2B" }}
              >
                Email
              </Typography>
              <Typography>{profile.email}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{ color: "#613D2B", marginBottom: "16px" }}
          >
            Transactions
          </Typography>
          <Box>
            {transaction.map((transaction, index) => (
              <TransactionCard
              id={transaction.id+transaction.userId}
                image={transaction.productTransactions.product.imageProduct}
                key={index}
                title={transaction.productTransactions.product.name}
                date={transaction.productTransactions.product.createdAt}
                price={transaction.productTransactions.product.price}
                qty={transaction.total}
                status={transaction.status}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
