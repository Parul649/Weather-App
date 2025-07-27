import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

export default function InfoBox({ weatherInfo }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1589486022941-a92fb1c4d8e5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, backgroundColor: "#cfe8efff" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherInfo.humidity > 80
                ? RAINY_URL
                : weatherInfo.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
              {weatherInfo.humidity > 80 ? (
                <ThunderstormOutlinedIcon />
              ) : weatherInfo.temp > 15 ? (
                <WbSunnyOutlinedIcon />
              ) : (
                <AcUnitOutlinedIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {weatherInfo.temp}&deg;C</p>
              <p>Humidity = {weatherInfo.humidity}</p>
              <p>Min Temp = {weatherInfo.tempMin}&deg;C</p>
              <p>Max Temp = {weatherInfo.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{weatherInfo.weather}</b> and
                feels like {weatherInfo.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
