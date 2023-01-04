import './Weather.css'
import { useQuery } from "react-query"
import axios from 'axios'
import { Timer } from '../timer/Timer';

export const Weather = () => {
  const API_KEY = '222e7197c6498dd6ede62a9fe39c3dee';
  const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=`+ API_KEY +`&units=metric`

  const { status, isFetching, data, error } = useQuery("getWeathers", () => 
    axios.get(weatherAPI),
    {
      refetchOnWindowFocus: false,
      retry: 0, 
      onSuccess: (data: any) => {
        console.log("성공임", data.data);
      },
      onError: (error: any) => {
        console.log("에러남", error);
      }
    }
  );

  return(
    <div className='weatherBox'>
      <span>{data?.data?.sys?.country}</span>
      <h1>{Math.round(data?.data?.main?.temp)}℃</h1>
      <p>{data?.data?.weather[0]?.main}</p>
      <div className='temp'>
        <span>최고: {data?.data?.main?.temp_max}℃</span>      
        <span>최저: {data?.data?.main?.temp_min}℃</span>
      </div>
      <p>바람: {data?.data?.wind?.speed}</p>
    </div>
  )
}