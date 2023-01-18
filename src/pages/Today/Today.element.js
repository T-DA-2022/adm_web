import styled from "styled-components";

export const TodayPageContainer = styled.div`
  width: 65vw;
  align-self: center;
  display: flex;
  justify-content: center;
`;

export const TodayFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: seashell;
  font-size: 20px;
  box-sizing: border-box;
  padding: 2vw;
`;

export const NameLine = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const NameLabel = styled.div`
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NameInput = styled.input`
  margin-left: 12px;
  width: 200px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: auto;
  }
`;

export const DateCheckbox = styled.input`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  align-self: center;
`;

export const NameDiv = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 4px;
`;

export const NameSpan = styled.div`
  display: flex;
  align-items: flex-end;

  &:hover {
    cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  }
`;

export const ScoreDiv = styled.div`
  border: 1px solid black;
`;

export const LineArea = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 100%;
  margin-bottom: 2vh;
`;
export const Graphdiv = styled.div`
  width: 60%;
`;

export const SpecificDiv = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  overflow-y: auto;
  padding: 2vh 20px;
  box-sizing: border-box;
  border-left: 1px solid black;
  font-size: 16px;
`;

export const SpecificLine = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-bottom: 2vh; */
  justify-content: space-between;
`;

export const SpecificInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 12px;
  width: 100px;
  text-align: right;
  padding-right: 8px;
  &:focus {
    outline: none;
  }
`;

export const FeedbackDiv = styled.textarea`
  background-color: transparent;
  border: 1px solid black;
  width: 100%;
  min-height: 200px;
  margin-bottom: 2vh;
  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  background-color: gray;
  width: 200px;
  align-self: center;
`;

export const VideoRecommendArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const VideoAddBtn = styled.button`
  background-color: white;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin-left: 8px;
`;

export const VideoRecommendInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const VideoRecommendLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
`;
