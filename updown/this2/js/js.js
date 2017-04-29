window.onload = function() {

	//获取元素
	var prevGroup = document.querySelector("#prevGroup");
	var nextGroup = document.querySelector("#nextGroup");
	var imgLeft = document.querySelector(".imgLeft img");
	var imgRight = document.querySelector(".imgRight img");
	var imgNumR = document.querySelector(".imgRight .imgNum");
	var imgNumL = document.querySelector(".imgLeft .imgNum");
	var imgNameL = document.querySelector(".imgLeft .imgName");
	var imgNameR = document.querySelector(".imgRight .imgName");
	var imgLeftBox = document.querySelector(".imgLeft");
	var imgRightBox = document.querySelector(".imgRight");

	var nL = 0;
	var nR = 0;
	var arrImgL = ["34435.jpg", "sdfsdfcc.jpg", "456fgf.jpg", "sadsd.jpg", "sdbg.jpg"];
	var arrNamaL = ["图片一", "图片二", "图片三", "图片四", "图片五"];
	var arrImgR = ["we45345.jpg", "ktytyurt23.jpg", "xcv32b.jpg"];
	var arrNamaR = ["图片一", "图片二", "图片三"];

	//初始化

	imgNumL.innerHTML = nL + 1 + '/' + arrImgL.length;
	imgNumR.innerHTML = nR + 1 + '/' + arrImgR.length;
	imgNameR.innerHTML = arrNamaR[0];
	imgNameL.innerHTML = arrNamaL[0];

	//封装函数
	//左边图片切换
	function LeftQH() {
		if(nL > arrImgL.length - 1) {
			nL = 0;
		}
		imgLeft.src = 'img3/' + arrImgL[nL] + '';
		imgNumL.innerHTML = nL + 1 + '/' + arrImgL.length;
		imgNameL.innerHTML = arrNamaL[nL];
	}

	//右边图片切换
	function RightQH() {
		if(nR > arrImgR.length - 1) {
			nR = 0;
		}
		imgRight.src = 'img3/' + arrImgR[nR] + '';
		imgNumR.innerHTML = nR + 1 + '/' + arrImgR.length;
		imgNameR.innerHTML = arrNamaL[nR];
	}

	//点击下一组切换
	nextGroup.onclick = function() {
		nL++;
		//左边图片切换
		LeftQH()

		//右边图片切换
		nR++;
		RightQH()

	};

	//点击上一组切换
	prevGroup.onclick = function() {
		nL--;
		//左边图片切换
		if(nL < 0) {
			nL = arrImgL.length - 1;
		}
		imgLeft.src = 'img3/' + arrImgL[nL] + '';
		imgNumL.innerHTML = nL + 1 + '/' + arrImgL.length;
		imgNameL.innerHTML = arrNamaL[nL];

		//右边图片切换
		nR--;
		if(nR < 0) {
			nR = arrImgR.length - 1;
		}
		imgRight.src = 'img3/' + arrImgR[nR] + '';
		imgNumR.innerHTML = nR + 1 + '/' + arrImgR.length;
		imgNameR.innerHTML = arrNamaL[nR];
	};

	//点击左边图片切换
	imgLeftBox.onclick = function() {
		nL++;
		LeftQH()
	};
	//点击右边图片切换
	imgRightBox.onclick = function() {
		nR++;
		RightQH()
	};
}