import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  /* background: #f2f3fe;
  width: 100%;
  margin-top: 10%;
  @media (min-width: 568px) {
    margin-top: 4%;
  }
  .mentor {
    padding: 15% 0%;
    @media (min-width: 568px) {
      padding: 9% 0%;
    }
    @media (min-width: 768px) {
      padding: 6% 5%;
    }
    @media (min-width: 992px) {
      padding: 5% 10%;
    }
    @media (min-width: 1200px) {
      padding: 4% 10%;
    }

    .mentor-inner {
      padding: 15% 5% 30% 5%;
      background: #fff;
      text-align: center;
      display: grid;
      gap: 9%;
      @media (min-width: 568px) {
        padding-bottom: 23%;
      }
      @media (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 6% 5% 7% 1%;
        border-radius: 15px;
      }
      @media (min-width: 992px) {
        padding: 6% 15% 7% 9%;
      }
      @media (min-width: 1200px) {
        padding: 6% 10% 7% 9%;
        gap: 5%;
      }

      .images {
        position: relative;
        @media (min-width: 768px) {
          width: 50%;
        }
        @media (min-width: 992px) {
          width: 40%;
        }
        .blue {
          display: none;
          position: static;
          @media (min-width: 768px) {
            background: #4a5af9;
            display: block;
            height: 200px;
            width: 100%;
            border-radius: 5px;
            z-index: 1;
          }
          @media (min-width: 992px) {
            height: 200px;
            width: 85%;
          }
          @media (min-width: 992px) {
            height: 200px;
            width: 80%;
          }
        }
        .img1 {
          height: 250px;
          width: 75%;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 1px 1px 5px 5px #c3c3c3;
          @media (min-width: 568px) {
            height: 250px;
            width: 52%;
          }
          @media (min-width: 768px) {
            border-radius: 5px;
            box-shadow: 2px 2px 20px 2px #c3c3c3;
            height: 200px;
            width: 95%;
            z-index: 2;
            position: absolute;
            top: 10%;
            left: 10%;
          }
          @media (min-width: 992px) {
            width: 85%;
          }
          @media (min-width: 1200px) {
            width: 79%;
            left: 7%;
          }
        }
        .img-a {
          position: absolute;
          bottom: -20%;
          width: 38%;
          right: -2%;

          @media (min-width: 568px) {
            bottom: -25%;
          }
          @media (min-width: 768px) {
            bottom: -30%;
            z-index: 4;
            width: 50%;
            right: -34%;
          }
          @media (min-width: 992px) {
            width: 55%;
            right: -20%;
          }
          @media (min-width: 1200px) {
            border-radius: 10px;
            bottom: -37%;
            width: 60%;
            right: -13%;
          }
        }
      }
    }
    .text {
      display: grid;
      gap: 5%;
      @media (min-width: 768px) {
        width: 90%;
        text-align: left;
      }
      @media (min-width: 1200px) {
        padding-right: 5%;
      }
      h4 {
        font-size: 15px;
        line-height: 25px;
        position: relative;
        @media (min-width: 568px) {
          font-size: 27px;
          line-height: 35px;
        }
        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 35px;
        }
        @media (min-width: 1200px) {
          font-size: 15px;
          line-height: 29px;
        }
        span{
            position: static;
            right: 0;
            &:hover{
                h4{
                    text-decoration: transparent;
                    display: block;
                }
            }
        }
      }
      p {
        font-size: 20px;
        line-height: 26px;
        @media (min-width: 992px) {
          line-height: 33px;
        }
      }
    }
  } */
`;

function Mentor() {
  return (
    <Wrapper>
      <div className="mentor my-10 px-20 xs:px-5">
        <h2 className="text-navy font-bold text-center text-4xl mb-10">
          Our Partner
        </h2>
        <div className="mentor-inner bg-white px-[10%] w-full pt-20 pb-20 flex xs:grid   xs:py-5 lg:gap-6 xl:gap-20 xl:px-10 gap-32">
          <div className="images w-1/5 h-[250px] xs:w-full lg:w-1/3 xl:w-2/5 relative xs:mb-20">
            <div className="blue absolute bg-navy lg:hidden  w-[100%] h-[240px] xl:h-[300px] "></div>
            <img
              src="./images/prof.png"
              alt="image"
              className="img1 w-[100%] left-6 top-6 absolute h-[240px] xs:h-[45vh]  lg:relative lg:left-0 lg:w-full lg:h-[30vh] xs:w-full xs:left-0 xl:h-[300px] object-cover  z-1 top-0 bg-light"
            />
            <img
              src="./images/td.jpg"
              alt="image"
              className="img-a absolute lg:relative lg:bottom-0 lg:right-0 lg:w-full lg:object-cover lg:h-auto w-[auto] h-[100px] xl:bottom-[-50%] xl:right-[-20%] bottom-[-20%] xs:hidden right-[-37%] object-cover  z-3"
            />
          </div>
          <div className="text grid gap-5 w-4/6  xs:w-full">
            <h4 className="text-navy  text-1xl">
              Tybrend Designs provide you with the best services by helping you
              come up with the best design for your house. We are well known for
              providing high quality Design Services to Clients with Honesty and
              Integrity. We create and implement development plans for Houses,
              Farmhouse, Towns, Cities. Not only that, we also evaluate existing
              conditions, identify opportunities and challenges and propose
              strategies for future growth and development. We enhance the
              visual appeal of a building or structure also contributing to the
              overall beauty and attractiveness of a space. Not only do we
              manage our clients space but we also create space that is
              conducive to social interaction, productivity, and relaxation.
              Remember, Your Idea is Our Project.
            </h4>
            <p>- Wallen Nyawumwe, Designer, Tybrend Designs</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Mentor;
