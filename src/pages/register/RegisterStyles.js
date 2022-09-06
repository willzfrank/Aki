import styled from "styled-components"

export const ContentWrapper = styled.div`
 		margin: 0 auto;
 		max-width: 400px;
 		padding: 10px 20px;
		font-size: 0;

        .register--content{
            margin-top:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            gap:10px;

            span{
            text-align:center;
            font-size:16px;
            }

            .facebook--btn{
            border:none;
            outline:none;
            border-radius:5px;
            cursor:pointer;
            padding:15px 70px;
            background:#4267B2;
            color:white;
        }

        .google--btn{
            border:none;
            outline:none;
            border-radius:5px;
            cursor:pointer;
            padding:15px 76px;
            background:#de5246;
            color:white;
        }
        }

        .register--header{
            color:black;
            font-size:16px;
            display:flex;
            align-items:center;
            justify-content:space-between;

            i{
            font-size:40px;
            cursor:pointer;
             }
        }

        	.one-field {
			position: relative;
			margin-top: 10px;
			margin-bottom: 20px;
			input,
			textarea {
				width: 100%;
				padding: 10px;
                outline-color:lime;
				&:focus, &:valid {
					+ label {
						color: green;
						font-size: .8rem;
						font-weight: bold;
						top: -10px;

						&:after {
							content: ':';
						}
					}
				}
			}
			
		}
		label {
			position: absolute;
			top: 12px;
			left: 10px;
			color: grey;
			font-size: .8rem;
			background: #fff;

			-webkit-transition: all .4s ease-in-out;
			-moz-transition: all .4s ease-in-out;
			-o-transition: all .4s ease-in-out;
			-ms-transition: all .4s ease-in-out;
			transition: all .4s ease-in-out;
		}
`


// * {
// 	-webkit-box-sizing: border-box;
// 	-moz-box-sizing: border-box;
// 	box-sizing: border-box;
// }
// body {
// 	background: #eee;
// 	font-size: 16px;
// 	font-family: lato;

// 	.content-wrapper {
// 		background: #fff;
// 		margin: 0 auto;
// 		max-width: 400px;
// 		padding: 10px 20px;
// 		font-size: 0;
// 		h3 {
// 			font-size: 2rem;
// 			color: #ff6600;
// 			margin: 0 0 20px;
// 		}
// 		.one-field {
// 			position: relative;
// 			margin-top: 10px;
// 			margin-bottom: 20px;
// 			input,
// 			textarea {
// 				width: 100%;
// 				padding: 10px;
// 				&:focus, &:valid {
// 					+ label {
// 						color: #ff6600;
// 						font-size: .8rem;
// 						font-weight: bold;
// 						top: -10px;

// 						&:after {
// 							content: ':';
// 						}
// 					}
// 				}
// 			}
// 			textarea {
// 				height: 130px;
// 			}
// 		}
// 		label {
// 			position: absolute;
// 			top: 12px;
// 			left: 10px;
// 			color: #888;
// 			font-size: .8rem;
// 			background: #fff;

// 			-webkit-transition: all .4s ease-in-out;
// 			-moz-transition: all .4s ease-in-out;
// 			-o-transition: all .4s ease-in-out;
// 			-ms-transition: all .4s ease-in-out;
// 			transition: all .4s ease-in-out;
// 		}
// 	}
// }
