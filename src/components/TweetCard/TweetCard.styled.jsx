import styled from 'styled-components';
import * as bgImage from '../../images/card/card-img.png';
import * as bigBgImage from '../../images/card/card-img@2x.png';
import * as goitSvg from '../../images/card/goit.svg';
import * as hoverImg from '../../images/card/user_hover.svg';

export const Container = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 178px;

  background-image: ${`url(${goitSvg.default})`}, ${`url(${bgImage.default})`},
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-size: 76px 22px, 308px 168px, 100%;
  background-position: top 20px left 20px, top 28px left 36px, 100%;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  text-align: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${goitSvg.default})`},
      ${`url(${bigBgImage.default})`},
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }

  ::before {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ImgBorder = styled.div`
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;

export const ImgThumb = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 62px;
  height: 62px;
  overflow: hidden;

  background: #5736a3;
  border-radius: 50%;
`;

export const ImgLabel = styled.div`
  display: none;
  position: absolute;
  left: -60px;
  top: -80px;
  width: 200px;
  height: 80px;
  padding: 15px 22px;
  background-image: ${`url(${hoverImg.default})`};
  background-repeat: no-repeat;

  ${ImgBorder}:hover & {
    display: block;
  }
`;

export const CardText = styled.p`
  color: #ebd8ff;
  font-family: 'MontserratMedium';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  :nth-child(2) {
    margin-top: 26px;
    margin-bottom: 16px;
  }

  :nth-child(3) {
    margin-bottom: 26px;
  }
`;
