import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

export const HomeMainContainer = styled.div`
  display: flex;
  margin-top: 7vh;
`
export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-left: 20vw;
  background-color: ${prop => (prop.theme === 'true' ? '#181818' : '#f9f9f9')};
`
export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  min-height: 80vw;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
`
export const FailureImg = styled.img`
  width: 250px;
`
export const FailurePara = styled.p`
  font-size: 15px;
`
export const HomeVideosContainer = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const NotFoundContainer = styled(FailureContainer)``
export const NotFoundHeading = styled(FailureHeading)``
export const NotFoundImg = styled(FailureImg)``
export const NotFoundPara = styled(FailurePara)``
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

export const LoaderContainer = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const BannerContent = styled.div`
  max-width: 300px;
`
export const BannerButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  border: 2px solid #424242;
  color: #424242;
  font-size: 12px;
  font-weight: bold;
`
export const BannerPara = styled.p`
  font-weight: 500;
  color: #424242;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: 0px solid;
  outline: none;
  cursor: pointer;
`
export const CloseIcon = styled(MdClose)`
  font-size: 17px;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #616e7c;
  align-self: flex-start;
`
export const SearchButton = styled.button`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px solid;
  border-left-width: 1px;
  border-color: #616e7c;
  outline: none;
  cursor: pointer;
`
export const SearchIcon = styled(BsSearch)`
  font-size: 12px;
  cursor: pointer;
`
export const Input = styled.input`
  width: 300px;
  padding: 6px;
  font-size: 12px;
  border: 0px solid;
  outline: none;
  color: #616e7c;
`
export const Label = styled.label``
