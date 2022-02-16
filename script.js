//Note: event.pageX = with reference all page (include unseen pages hidden in scroll view) (0,0) is top left of the whole system
//		--x & --y = with reference with the certain Div only (in this case with reference to class: Image) (0,0) is the top left of class Image
//https://gifmaker.me/

window.onload = function() {

	//Modal for popup
		// Get the modal
	var modal = document.getElementById("myModal");
	var BackToStart = document.getElementById("headerWord1");

	// Get the button that opens the modal
	var btn = document.getElementById("headerWord2");
	var btn1 = document.getElementById("FifthSegmentButton");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	btn1.onclick = function() {
	  btn.click();
	}

	window.onbeforeunload = function () {
	  window.scrollTo(0, 0);
	}
	BackToStart.onclick=function(){
		window.scrollTo(0, 0);
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	//0. Initialize Segment 1 to be with page length
	// document.getElementById("MainTitle").innerHTML = document.documentElement.clientHeight;
	const First_Segment = document.querySelector('.FirstSegment');
	First_Segment.style.setProperty('--fsHeight', document.documentElement.clientHeight + "px");
	window.addEventListener('resize', function(event) {
	    const First_Segment = document.querySelector('.FirstSegment');
		First_Segment.style.setProperty('--fsHeight', document.documentElement.clientHeight + "px");
		rect = document.querySelector('.Images').getBoundingClientRect()
		rectTop = window.scrollY + rect.top;
		rectLeft = window.scrollX + rect.left;
		// div_above.style.setProperty('--x', (event.pageX-(window.scrollX + rect.left)) + 'px');//why need minus, refer to above Note
		// div_above.style.setProperty('--y', (event.pageY-(window.scrollY + rect.top)) + 'px'); //why need minus, refer to above Note
		// document.getElementById("headerWord1").innerHTML = rect.top +" " + window.scrollY;
	}, true);

	//1. For Looking into dark feature
	const div = document.querySelector('.hole');
	const div_above = document.querySelector('.hole_above');
	const secondsegment = document.querySelector('.SecondSegment');
	const threeDjs = document.querySelector('.threeD');
	const fourthSegment = document.querySelector('.fourthSegment');
	const vid = document.querySelector('.order');
	const coin1 = document.querySelector('.coinImg1');
	const coin2 = document.querySelector('.coinImg2');
	const coin3 = document.querySelector('.coinImg3');
	var rect = document.querySelector('.Images').getBoundingClientRect();
	// const fifthSegment = document.querySelector('.fifthSegment');
	rectLeft= rect.left;
	rectTop= rect.top;
	circle_mask_transparency = 100
	circle_mask_size = 1/8	//mask radius = 1/6 of total Image width

	
    //1.1 For keeping the initial aspect ratio of the Image & Mask Image
    //	  For updating of initial mask circle's size
    Image_width = 1024;
    Image_height = 768
	ori_aspect = Image_width/Image_height // width / height
	div.style.setProperty('height', (div.clientWidth/ori_aspect) + 'px');
	div_above.style.setProperty('height', (div.clientWidth/ori_aspect) + 'px');
	// div_above.style.webkitMask = "radial-gradient(" + div.clientWidth/10 + "px at var(--x) var(--y), transparent 100%, black 100%)";

	//1.2 Ensure the mask moves following Mouse Movement
	document.addEventListener('mousemove', function() {
		div_above.style.webkitMask = "radial-gradient(" + div.clientWidth*circle_mask_size + "px at var(--x) var(--y), transparent "+circle_mask_transparency+"%, black 100%)";
		div_above.style.setProperty('--x', (event.pageX-rectLeft) + 'px');//why need minus, refer to above Note
		div_above.style.setProperty('--y', (event.pageY-rectTop) + 'px'); //why need minus, refer to above Note
		// document.getElementById("headerWord1").innerHTML = rect.top +" " + event.pageY;
		// document.getElementById("sub").innerHTML = event.pageY;
		yMousePos=event.pageY;
		xMousePos=event.pageX;
	});

  	//1.3 Ensure the mask moves following Scroll Movement
	lastScrolledLeft=0;
	lastScrolledTop=0;
	xMousePos = 0;
	yMousePos = 0;
	class_removed = 0;
	class_removed1 = 0;
	class_removed2 = 0;
	document.addEventListener("scroll", myFunction);
	// document.querySelector('.hole_graphs').style.display = "none"
	function myFunction() {

		xMousePos += (document.documentElement.scrollLeft-lastScrolledLeft);
		lastScrolledLeft = document.documentElement.scrollLeft;
		yMousePos += (document.documentElement.scrollTop-lastScrolledTop);
		lastScrolledTop = document.documentElement.scrollTop;
		div_above.style.setProperty('--x', (xMousePos-rectLeft) + 'px');	//why need minus, refer to above Note
		div_above.style.setProperty('--y', (yMousePos-rectTop) + 'px');	//why need minus, refer to above Note
		// document.getElementById("sub").innerHTML = rect.top;
		document.querySelector('.Images').style.setProperty('--font_size', (div.clientWidth/50) + 'px');
		document.querySelector('.Images').style.setProperty('--font_size_for_text1', (div.clientWidth/20) + 'px');
		document.querySelector('.Images').style.setProperty('--font_size_for_text2', (div.clientWidth/50) + 'px');
		document.querySelector('.Images').style.setProperty('--font_size_for_hole_1st_desc', (div.clientWidth/70) + 'px');
		

		//Update the upperrange and lowerrange of the animation rerun
		UpperRange = (rectTop + (document.documentElement.clientWidth/ori_aspect)*0.2 )- document.documentElement.clientHeight
		LowerRange = (rectTop + (document.documentElement.clientWidth/ori_aspect)*0.8 )
		UpperRange1 = (rectTop + (document.documentElement.clientWidth/ori_aspect)*1 ) + (document.documentElement.clientWidth/ori_aspect1)*0.2 - document.documentElement.clientHeight
		LowerRange1 = (rectTop + (document.documentElement.clientWidth/ori_aspect)*1 ) + (document.documentElement.clientWidth/ori_aspect1)*0.7
		UpperRange2 = (rectTop + (document.documentElement.clientWidth/ori_aspect)*1 ) + (document.documentElement.clientWidth/ori_aspect1)*1 + (document.documentElement.clientWidth/ori_aspect1)*0.2 - document.documentElement.clientHeight
		LowerRange2 = (rectTop + (document.documentElement.clientWidth/ori_aspect)*1 ) + (document.documentElement.clientWidth/ori_aspect1)*1 + (document.documentElement.clientWidth/ori_aspect1)*0.7


		// document.getElementById("headerWord1").innerHTML=UpperRange + " " + LowerRange + " " +window.scrollY + " " + div.clientWidth

		//For graph one
		if(window.scrollY < UpperRange || window.scrollY > LowerRange){
			class_removed=1; 
			// document.getElementById("headerWord1").innerHTML = "Yes" + class_removed;
		}
		if(class_removed===1 && window.scrollY > UpperRange && window.scrollY < LowerRange){
			// document.querySelector('.Images').classList.remove("hole_graphs").classList.add("hole_graphs")
			class_removed=0;
			// document.getElementById("headerWord1").innerHTML = "No"+ class_removed;
			rerun_animation();
		}

		// document.getElementById("headerWord1").innerHTML=window.scrollY + document.documentElement.clientHeight + " " + rectTop + " " + document.documentElement.clientWidth/ori_aspect;

		//For 2nd segment & coin animation rerun
		if(window.scrollY < UpperRange1 || window.scrollY > LowerRange1){
			class_removed1=1; 
			document.querySelector('.SecondSegment').style.setProperty('opacity', 0);
			document.querySelector('.threeD').style.setProperty('opacity', 0);
			// document.getElementById("headerWord1").innerHTML = "Yes" + class_removed;
		}
		if(class_removed1===1 && window.scrollY > UpperRange1 && window.scrollY < LowerRange1){
			// document.querySelector('.Images').classList.remove("hole_graphs").classList.add("hole_graphs")
			class_removed1=0;
			document.querySelector('.SecondSegment').style.setProperty('opacity', 1);
			document.querySelector('.threeD').style.setProperty('opacity', 1);
			// document.getElementById("headerWord1").innerHTML = "No"+ class_removed;
			rerun_animation_2ndSegment();
			rerun_animation_coin();
		}
			//For fourth segment (animation)
		if(window.scrollY < UpperRange2 || window.scrollY > LowerRange2){
			class_removed2=1; 
			document.querySelector('.FourthSegment_Sub_Title').style.setProperty('opacity', 0);
			// document.getElementById("headerWord1").innerHTML = "Yes" + class_removed;
		}
		if(class_removed2===1 && window.scrollY > UpperRange2 && window.scrollY < LowerRange2){
			// document.querySelector('.Images').classList.remove("hole_graphs").classList.add("hole_graphs")
			class_removed2=0;
			document.querySelector('.FourthSegment_Sub_Title').style.setProperty('opacity', 1);
			// // document.getElementById("headerWord1").innerHTML = "No"+ class_removed;
			rerun_animation_order();
		}

		}
	function rerun_anim_sub(variable){
		variable.style.animation = 'none';
		variable.offsetHeight; /* trigger reflow */
		variable.style.animation = null;
	}
	function rerun_animation() {
		var el1=document.querySelector('.graph_1');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_2');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_3');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_4');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_5');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_6');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_7');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_8');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_9');
		rerun_anim_sub(el1);

		var el1=document.querySelector('.graph_above_1');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_2');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_3');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_4');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_5');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_6');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_7');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_8');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.graph_above_9');
		rerun_anim_sub(el1);
	}

	function rerun_animation_2ndSegment() {
		var el1=document.querySelector('.SecondSegment_Title');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.SecondSegment_Desc');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.SecondSegment_Title_123');
		rerun_anim_sub(el1);
	}

	function rerun_animation_coin() {
		var el1=document.querySelector('.coinImg1');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.coinImg2');
		rerun_anim_sub(el1);
		var el1=document.querySelector('.coinImg3');
		rerun_anim_sub(el1);
	}

	function rerun_animation_order() {
		var el1=document.querySelector('.FourthSegment_Sub_Title');
		rerun_anim_sub(el1);
	}

	//For button clicking and play the animation
	document.getElementById("button").onclick = buttonClicked;
	function buttonClicked(){
		vid.play();
	}
	//1.4 For keeping the aspect ratio of the Image & Mask Image despite Window resize
    //	  For updating of mask circle's size when Window resize
    //	  For updating of the qty size & word size when resize

    ori_aspect1 = 1.75 //height / width of 2nd segment
    secondsegment.style.setProperty('height', (div.clientWidth/ori_aspect1) + 'px');
    threeDjs.style.setProperty('height', (div.clientWidth/ori_aspect1) + 'px');
	secondsegment.style.setProperty('--font_size_for_text1', (div.clientWidth/15) + 'px');
	secondsegment.style.setProperty('--font_size_for_smallText', (div.clientWidth/80) + 'px');
	secondsegment.style.setProperty('--font_size_for_smallText1', (div.clientWidth/50) + 'px');
	fourthSegment.style.setProperty('height', (div.clientWidth/1.779) + 'px');
	fourthSegment.style.setProperty('--fourthSegmentFontSizeBig', (div.clientWidth/20) + 'px');
	fourthSegment.style.setProperty('--fourthSegmentFontSizeSmall', (div.clientWidth/80) + 'px');
	document.querySelector('.FifthSegmentDesc').style.setProperty('font-size', (div.clientWidth/40) + 'px');
	document.querySelector('.FifthSegmentButton').style.setProperty('font-size', (div.clientWidth/60) + 'px');
	document.querySelector('.FifthSegmentButton').style.setProperty('height', (div.clientWidth/30) + 'px');
	document.querySelector('.modal').style.setProperty('--ModalInputHeight', (document.documentElement.clientHeight/30) + 'px');
	document.querySelector('.modal').style.setProperty('--MsgBoxInputHeight', (document.documentElement.clientHeight/10) + 'px');
	document.querySelector('.modal').style.setProperty('--TextBoxMargin', (document.documentElement.clientHeight/80) + 'px' + ' 0px');
	document.querySelector('.modal-content').style.setProperty('height', (document.documentElement.clientHeight * 0.7) + 'px');
	
	

	//Fift Segment
	// fifthSegment.style.setProperty('height', (div.clientWidth/2.5) + 'px');
	// fifthSegment.style.setProperty('--borderWidth', (div.clientWidth/25) + 'px');
	// fifthSegment.style.setProperty('--fontsizefornumber', (div.clientWidth/50) + 'px');
	// fifthSegment.style.setProperty('--fontsizeforfifthsegmenttitle', (div.clientWidth/25) + 'px');
	// fifthSegment.style.setProperty('--fontsizeforfifthsegmentdesc', (div.clientWidth/65) + 'px');

	window.addEventListener("resize", function(){
		div.style.setProperty('height', (div.clientWidth/ori_aspect) + 'px');
		div_above.style.setProperty('height', (div.clientWidth/ori_aspect) + 'px');
		div_above.style.webkitMask = "radial-gradient(" + div.clientWidth*circle_mask_size + "px at var(--x) var(--y), transparent "+circle_mask_transparency+"%, black 100%)";
		document.querySelector('.Images').style.setProperty('--font_size', (div.clientWidth/50) + 'px');
		document.querySelector('.Images').style.setProperty('--font_size_for_text1', (div.clientWidth/20) + 'px');
		document.querySelector('.Images').style.setProperty('--font_size_for_text2', (div.clientWidth/50) + 'px');
		document.querySelector('.Images').style.setProperty('--font_size_for_hole_1st_desc', (div.clientWidth/70) + 'px');

		//For 3D
		threeDjs.style.setProperty('height', (div.clientWidth/ori_aspect1) + 'px');
		// var image = document.getElementById('coinImg');
	 //    image.style.width = '50%';
	 //    image.style.height = '50%';
		// // mesh3.scale.set(document.documentElement.clientWidth/1300,document.documentElement.clientWidth/1300,document.documentElement.clientWidth/1300);
		// // mesh3.position.set(-document.documentElement.clientWidth/1300,0,0)

		// renderer.setSize(div.clientWidth, (div.clientWidth/ori_aspect1), false);
		// camera.aspect = 1.75;
		// renderer.render(scene, camera);


		//For 2nd Segment
		secondsegment.style.setProperty('height', (div.clientWidth/ori_aspect1) + 'px');
		secondsegment.style.setProperty('--font_size_for_text1', (div.clientWidth/15) + 'px');
		secondsegment.style.setProperty('--font_size_for_smallText', (div.clientWidth/80) + 'px');
		secondsegment.style.setProperty('--font_size_for_smallText1', (div.clientWidth/50) + 'px');

		//for 4th Segment


		//Update the upperrange and lowerrange of the animation rerun
		UpperRange = (rectTop + (document.documentElement.clientWidth/ori_aspect)*0.2 )- document.documentElement.clientHeight
		LowerRange = (rectTop + (document.documentElement.clientWidth/ori_aspect)*0.8 )
		UpperRange1 = (rectTop + (document.documentElement.clientWidth/ori_aspect)*1 ) + (document.documentElement.clientWidth/ori_aspect1)*0.2 - document.documentElement.clientHeight
		LowerRange1 = (rectTop + (document.documentElement.clientWidth/ori_aspect)*1 ) + (document.documentElement.clientWidth/ori_aspect1)*0.8

		//for 4th Segment &
		//Update the video size
		fourthSegment.style.setProperty('height', (div.clientWidth/1.779) + 'px');
		fourthSegment.style.setProperty('--fourthSegmentFontSizeBig', (div.clientWidth/20) + 'px');
		fourthSegment.style.setProperty('--fourthSegmentFontSizeSmall', (div.clientWidth/70) + 'px');

		//For fifth segment
		document.querySelector('.FifthSegmentDesc').style.setProperty('font-size', (div.clientWidth/40) + 'px');
		document.querySelector('.FifthSegmentButton').style.setProperty('font-size', (div.clientWidth/60) + 'px');
		document.querySelector('.FifthSegmentButton').style.setProperty('height', (div.clientWidth/30) + 'px');
		// vid.play();

		//for Modal form
		document.querySelector('.modal').style.setProperty('--ModalInputHeight', (document.documentElement.clientHeight/30) + 'px');
		document.querySelector('.modal').style.setProperty('--MsgBoxInputHeight', (document.documentElement.clientHeight/10) + 'px');
		document.querySelector('.modal').style.setProperty('--TextBoxMargin', (document.documentElement.clientHeight/80) + 'px' + ' 0px');	
		document.querySelector('.modal-content').style.setProperty('height', (document.documentElement.clientHeight * 0.7) + 'px');
		
	});


	//2. Image Slider
	// const slider_images = document.querySelector('.slider_images');
	// const foreground = document.querySelector('.foreground');
	// const background = document.querySelector('.background');
	// const slider = document.querySelector('.slider');
	// var slider_images_rect = document.querySelector('.slider_images').getBoundingClientRect()

	// left_white_column = (slider_images_rect.left*100/Image_width)
	// slider_images.style.setProperty('--height', (div.clientWidth/ori_aspect) + 'px');
	
	// document.addEventListener('input', function() {
	// 	foreground.style.setProperty('width', event.target.value + '%');
	// 	foreground.style.setProperty('background-size', (1*10000/event.target.value) +"% 100%");
	// 	// document.getElementById("sub").innerHTML = 100-(left_white_column/2) ;
	// });

	// window.addEventListener("resize", function(){
	// 	slider_images.style.setProperty('--height', (div.clientWidth/ori_aspect) + 'px');
	// });

	let currentIndex = 0;
	fadeInTime = 4;
	const hello = ['The Fortune Teller', 'The Strategist', 'The Analyst']; //The Advisor , The Planner
	const aim = ['Inventory Forecast','Inventory Planning','Inventory Optimization']
	currentIndex = 0;
	const switch_class = document.querySelector('.switch');
	const switch_class3 = document.querySelector('.switch3');
	switch_class.style.setProperty('--time', fadeInTime + "s");
	switch_class3.style.setProperty('--time', fadeInTime + "s");

	// function randomIndex() {
	//   return ~~(Math.random() * hello.length);
	// };

	window.setInterval(function() {
	  // let newIndex = randomIndex();
	  if (hello.length-1 === currentIndex){
	  	currentIndex = 0;
	  	// document.getElementById("switch").style.setProperty('--fontsize', "80px");
	  	// // document.getElementById("firstLine").style.setProperty('--fontsize', "80px");
	  	// document.getElementById("switch3").style.setProperty('--fontsize', "80px");
	  	// document.getElementById("firstLine3").style.setProperty('--fontsize', "80px");
	  }
	  else {
	  	currentIndex = currentIndex+1;
	  	// document.getElementById("switch").style.setProperty('--fontsize', "60px");
	  	// // document.getElementById("firstLine").style.setProperty('--fontsize', "50px");
	  	// document.getElementById("switch3").style.setProperty('--fontsize', "60px");
	  	// document.getElementById("firstLine3").style.setProperty('--fontsize', "50px");
	  }
	  document.getElementById("switch").textContent = hello[currentIndex];
	  document.getElementById("switch3").textContent = aim[currentIndex];
	}, fadeInTime*1000);

	//ThreeJS
	// container = document.getElementById( 'threeD' );
	// // var mesh3;
	// // document.body.appendChild( container );

	// const scene = new THREE.Scene()
	// const camera = new THREE.PerspectiveCamera( 45, ori_aspect1, 0.1, 1000 )
	// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true})

	// renderer.setSize( window.innerWidth, window.innerWidth/1.75 )
	// container.appendChild( renderer.domElement )

	// // var geometry = new THREE.BoxGeometry( 1, 1, 1)
	// // var material = new THREE.MeshBasicMaterial( { color: 0xff0051 })
	// // var cube = new THREE.Mesh ( geometry, material )
	// // scene.add( cube )
	// renderer.render( scene, camera )
	// camera.position.z = 10

	// loader = new THREE.GLTFLoader();
	// loader.load("https://dl.dropbox.com/s/11gf9rgx6c6c7ir/planet%20red.gltf", function(gltf){

	// 	mesh3 = gltf.scene;
	// 	mesh3.scale.set(document.documentElement.clientWidth/1300,document.documentElement.clientWidth/1300,document.documentElement.clientWidth/1300);
	// 	mesh1=mesh3.clone();
	// 	mesh2=mesh3.clone();
	// 	mesh1.position.set(4.5,0.5,0);
	// 	mesh2.position.set(2,3.5,0);
	// 	mesh3.position.set(-4,0,0);
	// 	scene.add(mesh1);
	// 	scene.add(mesh2);
	// 	scene.add(mesh3);
	// });

	// function animate() {
	//  requestAnimationFrame( animate )
	//  // cube.rotation.x += 0.04;
	//  // cube.rotation.y += 0.04;
	//  mesh3.rotation.y += 0.04;
	//  mesh3.rotation.x += 0.04;
	//  // mesh3.rotation.z += 0.04;
	//  renderer.render( scene, camera )
	// }
	

	// var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
	// scene.add( ambientLight )

	// var pointLight = new THREE.PointLight( 0xffffff, 1 );
	// pointLight.position.set( 25, 50, 25 );
	// scene.add( pointLight );

	// var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })



	// const light = new THREE.DirectionalLight(0xFFFFFF, 5);
	// const light2 = new THREE.DirectionalLight(0xFFFFFF, 5);
	// //const light3 = new THREE.DirectionalLight(0xFFFFFF, 3);
	// //UFOMesh.position.y = - 1;
	// //UFOMesh.position.z =  2;
	// //UFOMesh.position.set(0,-1,2);
	// light.position.set(5, 3, 5);
	// light2.position.set(-5, -3, -5);
	// //light3.position.set(0,-1,UFOdepth);

	// //material.map = new THREE.TextureLoader().load("https://dl.dropboxusercontent.com/s/n3edhhtlo451img/diffuse.jpg"); //https://www.dropbox.com/s/n3edhhtlo451img/diffuse.jpg?dl=0
	// //material.bumpMap = new THREE.TextureLoader().load("https://dl.dropboxusercontent.com/s/uvu5t6juma95ff1/bump.jpg"); //https://www.dropbox.com/s/uvu5t6juma95ff1/bump.jpg?dl=0
	// //scene.add(mesh);
	// scene.add(light);
	// scene.add(light2);

	// animate();
}
