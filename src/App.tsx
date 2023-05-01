import styled, { css } from 'styled-components'
import { GlobalStyleComponent } from 'styled-components'
import { GlobalStyles } from './components/Globals'

import LogoImage from './assets/logo.svg'
import DollarIcon from './assets/icon-dollar.svg'
import PersonIcon from './assets/icon-person.svg'


function App() {
  return (
    <>
      <GlobalStyles />
      <Logo src= { LogoImage } alt='SPLITTER logo' />
      <Board>
        <div>
          <InputDiv margin_top = { "0rem" }>
            <InputDivInfo>
              <InputName>Bill</InputName>
              <Error>Can’t be zero</Error>
            </InputDivInfo>
            <Input type = "number" placeholder='0' placeholderImage = { DollarIcon }/>
          </InputDiv>

          <TipBox>
            <TipBoxName>Select Tip %</TipBoxName>
            {["5%", "10%", "15%", "25%", "50%"].map(tip => {
              return (
                <TipButton key = { tip }>{ tip }</TipButton>
              )
            })}
            <CustomInput type = "number" placeholder='Custom'/>
          </TipBox>

          <InputDiv margin_top = { "3.2rem" }>
            <InputDivInfo>
              <InputName>Number of People</InputName>
              <Error>Can’t be zero</Error>
            </InputDivInfo>
            <Input type = "number" placeholder='0' placeholderImage = { PersonIcon }/>
          </InputDiv>
        </div>


        <OutPutDiv>
          <Section margin_top = { "0" }>
            <SectionInfo>
              Tip Amount
              <SectionInfoSpan>/ person</SectionInfoSpan>
            </SectionInfo>
            <Price>$4.27</Price>
          </Section>

          <Section margin_top = { "2.5rem" }>
            <SectionInfo>
              Tip Amount
              <SectionInfoSpan>/ person</SectionInfoSpan>
            </SectionInfo>
            <Price>$32.79</Price>
          </Section>

          <Reset>RESET</Reset>
        </OutPutDiv>
        
      </Board>
    </>
  )
}


const Logo = styled.img`
  margin-top: 5rem;
  width: 8.7rem;
  height: 5.3rem;
`

const Board = styled.div`
  width: 100vw;
  padding: 3.2rem 2.4rem;
  background-color: var(--pure-white);
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px 25px 0px 0px;
  margin-top: 4.1rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`



interface IInputDivProps {
  margin_top: string
}


const InputDiv = styled.div<IInputDivProps>`
  ${props => css`
    margin-top: ${props.margin_top};
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  `}
`


const InputDivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  line-height: 1.5em;
`


const InputName = styled.p`
  color: var(--gray-dark);
`


const Error = styled.p`
  color: var(--red);
  opacity: 0;
`


interface IInputPlaceholderImage {
  placeholderImage: string
}

const Input = styled.input<IInputPlaceholderImage>`
  ${props => css`
    background-color: var(--gray-light);
    border-radius: 5px;
    border: none;
    font-size: 2.4rem;
    line-height: 1.5em;
    background-image: url(${props.placeholderImage});
    background-position: left 1.9rem top 1.6rem;
    background-repeat: no-repeat;
    padding: 0.25em 0.75em;
    text-align: right;
    color: var(--green-bold);
    caret-color: var(--green-semi-bold);
    cursor: pointer;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      display: none;
    }
    &:hover, &:focus {
      outline: 2px solid var(--green-semi-bold);
    }

    &::-webkit-input-placeholder {
      opacity: 0.35;
    }

    &::-moz-placeholder { /* for FireFox */
      opacity: 0.35;
    }

    &:-ms-input-placeholder { /* for Safari and Opera */
      opacity: 0.35;
    }

    &::placeholder { /* for Internet Explorer */
      opacity: 0.35;
    }
  `}
`


const TipBox = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0, 1fr);
  grid-template-rows: repeat(4, 4.8rem);
  gap: 1.6rem;
  margin-top: 3.2rem;
`

const TipBoxName = styled(InputName)`
  font-size: 1.6rem;
  line-height: 1.5em;
  align-self: center;
  grid-column: 1/ 3;
`

const TipButton = styled.button`
  border: none;
  background: var(--green-bold);
  font-size: 2.4rem;
  line-height: 1.5em;
  color: var(--pure-white);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    background: #26C2AE;
    color: var(--green-bold);
  }

  &:hover {
    background: #9FE8DF;
    color: var(--green-bold);
  }
`

const CustomInput = styled.input`
  background-color: var(--gray-light);
  border-radius: 5px;
  border: none;
  font-size: 2.4rem;
  line-height: 1.5em;
  cursor: pointer;
  text-align: right;
  padding-right: 1.5rem; 
  caret-color: var(--green-semi-bold);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }

  &:hover, &:focus {
   outline: 2px solid var(--green-semi-bold);
  } 
`


const OutPutDiv = styled.div`
  background-color: var(--green-bold);
  border-radius: 15px;
  padding: 3.7rem 2.4rem 2.4rem;
`


interface ISection {
  margin_top: string
}

const Section = styled.section<ISection>`
  ${props => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props.margin_top};
  `}
`


const SectionInfo = styled.h2`
  font-size: 1.6rem;
  line-height: 1.5em;
  color: var(--pure-white); 
`

const SectionInfoSpan = styled.span`
  font-size: 0.8125em;
  line-height: 1.5em;
  color: #7F9D9F;
  display: block;
`

const Price = styled.p`
  font-size: 3.2rem;
  line-height: 1.5em;
  color: var(--green-semi-bold);
`

const Reset = styled.button`
  width: 100%;
  padding: 0.45em 0;
  border: none;
  background: var(--green-semi-bold);
  border-radius: 5px;
  font-size: 2rem;
  line-height: 1.5em;
  color: var(--green-bold);
  margin-top: 4.4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #9FE8DF;
  }
`

export default App
