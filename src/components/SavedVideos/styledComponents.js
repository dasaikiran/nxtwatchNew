import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingMainContainer = styled.div`
  margin-top: 7vh;
`
export const TrendingBodyContainer = styled.div`
  margin-left: 20vw;
  background-color: ${prop => (prop.theme === 'true' ? '#0f0f0f' : '#f9f9f9 ')};
`
export const TrendingBannerContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 15vh;
  background-color: #f1f1f1;
  align-items: center;
  padding-left: 40px;
`
export const TrendingBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 78vh;
`
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 65px;
  background-color: #e2e8f0;
  border-radius: 40px;
  margin-right: 15px;
`
export const TrendingHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
`
export const TrendingBodyUl = styled.ul``
export const FireIcon = styled(HiFire)`
  font-size: 30px;
  color: #ff0b37;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`
export const NotFoundHeading = styled.h1`
  font-size: 20px;
`
export const NotFoundImg = styled.img`
  width: 250px;
`
export const NotFoundPara = styled.p`
  font-size: 15px;
`
export const LoaderContainer = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`
export const RetryButton = styled.button`
  width: 80px;
  height: 30px;
  border: 0px solid;
  background-color: #4f46e5;
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`
