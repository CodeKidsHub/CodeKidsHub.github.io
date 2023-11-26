const myArr = [
    {f_name:'Maha', l_name: 'Khalid', image:'Teacher4.png', course:'Python',classname:'E1',classname2:'EE1'},
    {f_name:'Ghada', l_name: 'Al-Otaibi', image:'Teacher2.png', course:'Introduction to coding, Scratch ',classname:'E2',classname2:'EE2'},
    {f_name:'Norah', l_name: 'Al-Rashidi', image:'Teacher1.png', course:'Java',classname:'E3',classname2:'EE3'},
    {f_name:'Hind', l_name: 'Al-Rubaia', image:'Teacher5.png', course:'Snap!, javaScript',classname:'E4',classname2:'EE4'}
    ];
    let dFrag = document.createDocumentFragment();

    function Sort_DESC() {                    
        myArr.reverse( (p2, p1) => {
            if (p1.f_name < p2.f_name) return -1;
            if (p1.f_name > p2.f_name) return 1;
            return 0;
    });}
   function Sort_ASC() {

        myArr.sort( (p1, p2) => {
            if (p1.f_name < p2.f_name) return -1;
            if (p1.f_name > p2.f_name) return 1;
            return 0;
    });}
	
    // we need it to clear before add the tutors after sorting 
    function reset_ID3(){
        const node = document.getElementById("UnList");
        if (node.parentNode) {node.parentNode.removeChild(node);}
    }


   
    function onloading() {showDiv();}
                               
     
    function DESC() {                    
        Sort_DESC();
        reset_ID3();          
        showDiv();
    }
	

    function ASC() {
        Sort_ASC();
        reset_ID3();
        showDiv();
    }
    

    
    function showDiv(){
    const divMain = document.createElement('div');
    divMain.setAttribute('class', 'Hscrolling');
    divMain.setAttribute('id', 'UnList');
    // to create the repeated div with the ListElement class
    for (let x in myArr) {
        //image 
        let img1 = document.createElement('img');
        img1.setAttribute('class', 'tutors_image');
        img1.setAttribute('alt', 'Femal Image');
        img1.setAttribute('src', myArr[x].image );

        /// h3 
        let b_1 = document.createElement('b');
        b_1.textContent=myArr[x].f_name+' '+ myArr[x].l_name;

        let h3_1 = document.createElement('h3');
        h3_1.setAttribute('class', 'tutors_text');
        h3_1.setAttribute('style', 'font-size: 1.3em;');
        h3_1.appendChild(b_1);
        /// h3 

        /// h4 
        let span_1 = document.createElement('span');
        span_1.setAttribute('style', 'font-size: 1.3em;');       
        span_1.textContent=myArr[x].course;

        let b_2 = document.createElement('b');
        b_2.textContent="Courses: ";

        let h4_1 = document.createElement('h3');
        h4_1.setAttribute('class', 'tutors_text');
        h4_1.appendChild(b_2);
        h4_1.appendChild(span_1);
        /// ListElement div
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'ListElement');
        div1.setAttribute('id', myArr[x].classname);
        div1.appendChild(img1);
        div1.appendChild(h3_1);
        div1.appendChild(h4_1);
		
		const div2 = document.createElement('div');
        div2.setAttribute('class', myArr[x].classname2);
        div2.appendChild(div1);
       
		
		 // add all to the divMain
        divMain.appendChild(div2);


        }

    dFrag.appendChild(divMain);
        
       
    document.getElementById('ID2').appendChild(dFrag);
	
	const dropdown = document.getElementById('dropDlist');
	
	function dropDselected() {
  const selectOption = dropdown.value;

  // Check the selected value then call needed functions
  if (selectOption === 'AZ') {
     ASC();
	 reset_ID3();
	 showDiv();
  } else if (selectOption === 'ZA') {
    DESC();
	reset_ID3();
	showDiv();
  }
}

dropdown.addEventListener('change', dropDselected);
	

}
