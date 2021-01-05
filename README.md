# **Coffee Insider**

![Mokup Image](wireframes/mokup_image.png)

---

## **Project Goal** 
The world of coffee might be one of the most complex in the commodites universe. This complexity is not only visable at the farm level, where new coffee varietals are being engineered and planted in order to achieve higher yields and rust-resistant plants, but through the entire supply chain.

Due to this complexity, trying to simplify the commercial and logistic side of any business is crucial in the commodities world. If attainned, it can exponetially strenght relationships and minimize potential future disputes.

Therefore, the main goal of the COFFEE iNSIDER, is to provide the user with an easy accessible and intuitive tool to both suppliers and customers, in order to increase the efficiency of the negotiation process and consequently have parameterized all the components of the logistic process. 

Thank you for visting my project!

---
<a></a>

## **Table of contents**

1. [UX](#ux)

    1.1 [User Goals and Stories](#user-goals-and-stories)

    1.2 [User Requirements and Expectations](#user-requirements-and-expectations)
    
    1.3 [Company Goals](#company-goals)
    
    1.4 [Design Choices](#design-choices)

2. [Wireframes](#wireframes)
 
    2.1 [Changes throughout the coding](#changes-throughout-the-coding)

3. [Features](#features)
 
    3.1 [Existing Features](#existing-features)
 
    3.2 [Future Features](#future-features)

4. [Languages, Libraries, Frameworks and Tools](#languages-libraries-frameworks-and-tools)
 
    4.1 [Languages](#languages)
 
    4.2 [Libraries](#libraries)
 
    4.3 [Frameworks](#frameworks)
 
    4.4 [Tools](#tools)

5. [Testing and Debugging](#testing-and-debugging)
 
    5.1 
 
    5.2
 
    5.3 
 
    5.4 
 
    5.5 

6. [Deployment](#deployment)

7. [Credits and Acknowledgments](#credits-and-acknowledgments)
 
    7.1 [Credits](#credits)
 
    7.2 [Acknowledgments](#acknowledgments)

---

<a></a>

## **UX**

---
[[Back to top]](#table-of-contents)

<a></a>

### **User Goals and Stories**
#### **Goals**
As a user I aim for:
* An intuitive and easy to navigate website.
* Visually attractive pages.
* Concise and accurate information.
* Minimalistic pages without distracting contents.
* Appealing call-to-actions.

#### **Stories**
As a user, I want to:
* Access easily my target page depending on the subject being dicussed with my business relationship.
* Easily consult specific logistics terms.
* Brief unsderstanding of the 2 main the coffee contracts (GCA & ESCC).
* Stay updated with relevant coffee-related news.
* Place and order request via the website.
* Easily find the company's contacts.
* Easily find the company's social networks.

[[Back to top]](#table-of-contents)

<a></a>

### **User Requirements and Expectations**
#### **Requirements**
* Easy navigation.
* Reliable information.
* Immeadiate feedback on data inputs and/or submissions.
* Good responsiveness across multiple devices.

#### **Expectations**
* Gracious feedback handling an error.
* Maximum of 1 click to reach any given page in large screen devices and 2 for small and medium devices.
* External links shall open in a new tab.
* Internal links must work properly without breaking.
* External information must be provided by reliable sources.
* Visual effects are appealing but not distracting.
* Appropriate feedback after submitting offer request.

[[Back to top]](#table-of-contents)

<a></a>

### **Company Goals**

* Provide the employees with a tool to aid the negotiation process.
* Give potential and recurring customers an easy way to request an offer.
* Increase the commercial. 
* Provide (mainly) small businesses with limited knowledge about logistics and the coffee sector with the most relevant information in order to conduct their businesses.
* Expand the commercial relationships offering an appealing and informative tool for potential and recurring customers.
* Display the latest news on coffee to both customers and employees.


[[Back to top]](#table-of-contents)

<a></a>

### **Design Choices**
#### Fonts

In order to find the best font pairing to my project, I have used the font pairing generator website [Font Joy](https://fontjoy.com/ "Font Joy")

After running some trials, I have opted out for the below set of fonts to be used throught out the website.

##### Main Headings
[Montserrat](https://fonts.google.com/specimen/Montserrat?query=mont "Google Fonts")

##### Sub-headings/stand-out text
[Lora](https://fonts.google.com/specimen/Lora?query=lora "Google Fonts")

##### Overall content
[Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin "Google Fonts")

In my opinion, these 3 fonts work very well together. From the bold, easy-readable and attractive [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mont "Google Fonts") 
font to be used in the Main Headings, creating an interesting contrast with the [Lora](https://fonts.google.com/specimen/Lora?query=lora "Google Fonts") font in the sub-headings and 
finilizing wth the overall content font, [Libre Frankline](https://fonts.google.com/specimen/Libre+Franklin "Google Fonts"), which embeeds itself very well with the first two. Also,
this font reflects reliability, which is of extreme importance when developing a business website.

#### Icons

Throughout out the website, I will be using icons provided by [FontAwesome](https://fontawesome.com/ "FontAwesome").

The icons uses are self-explanatory and aid the navigation of the user, bringing an intuitive imagery to the website.

#### Colors

Being the main purpose of this website to support B2B relationships in coffee trading, I have selected a simple color palette of 3 colors, each one with a specific meaning in the business world.

![Color Scheme](wireframes/ci-color-palette.png)

* Jet: #2D2926
Whilst some might see black as a pessimistic color, there are several shades that attenuate this feeling, and brings out in the target audience a feeling of confidence, sophistication and comfort.
These feelings are usually consider a plus in any business relationship, reason why I have chosen for the Jet (black) color.

This color is meant to be used as the background-color, displaying a nice contrast with the the Fire Opal or Ivory colors on evry occasion.

* Fire Opal: #ED665A;
The Fire Opal color also gives the feeling to the user of confidence. As it can be considered as an attention-getting color and energizing, I aim to use it as the color for icons, buttons and any special feature that requires attention from the user throughout the website.

* Ivory: #F4F9E9;
The Ivory color bring outs as sense of calmness and relaxation, which is extremely important in every B2B relationship. For this reason, the main texts will have this color applied.


While creating this color scheme, I have resorted to the [Contrast-Checker](https://coolors.co/contrast-checker "Coolors") tool to guarantee a good readability for the user and decide the possible color-pairings to be used in the pages.


|Text color  	|Background color  	|Result   	|
|---	        |---	            |---	    |
|Jet   	        |Fire Opal         	|Good     	|
|Fire Opal   	|Jet               	|Good       |
|Jet   	        |Ivory              |Super     	|
|Ivory          |Jet                |Super      |
|Fire Opal      |Ivory              |Very Poor 	|
|Ivory          |Fire Opal          |Very Poor  |

Therefore, the last 2 pairings are excluded from the design choices.


#### Structure

My website will be divided into 4 different pages:

**Landing Page**
With a B2B relationship in mind, the landing page is aimed to be straight to the point.

Without any nuisance, this page offers exclusively a brief introduction to what is the Coffee Insider and a particular "navigation menu" that will display on a click/hover all the
other relevant pages, represented by intuitive icons.

**Trading Page**
The trading page will offer a tool for companies/customers to request personalized offers for differents coffees that The Coffee Insider can provide.

**News Page**
It is always good to stay up to date, but much better when the news are exclusively about coffee. They simply taste better!

The main goal of this page is to give the user the most recent news about the coffee industry, regardless if he/she is looking to buy coffee or just looking for fresh-brewed 
coffee-related news.

**Glossary Page**
The Glossary page intends to support the user with the 'jargon' used in the coffee sector. 

It will include the relevant terms regarding coffee quality from several coffee producing countries, passing by the Incoterms and finishing with the example of the 2 main base
contracts for coffee [GCA](http://www.greencoffeeassociation.org/images/uploads/resources/PROFESSIONAL_RESOURCES_-_Contract_Terms_Conditions.pdf "Green Coffee Association") & [ESCC](https://www.ecf-coffee.org/wp-content/uploads/2020/09/European-Standard-Contract-for-Coffee-ESCC-2019-edition.pdf "European Standard Contract for Coffee"), which, ***per se***, have a deeper and more technical look onto the coffee sector, despite its limitations.

[[Back to top]](#table-of-contents)

---
<a></a>

## **Wireframes**

[Small devices](wireframes/small-devices.png)

[Medium Devices](wireframes/medium-devices.png)

[Large devices](wireframes/large-devices.png)

<a></a>

### **Changes throughout the coding**

[[Back to top]](#table-of-contents)

---

<a></a>

## **Features**

[[Back to top]](#table-of-contents)

<a></a>

### **Existing Features**

#### ***Navigation: Floating Action Button***

The navigation will be supported in all devices with a Floating Action Button (FAB) instead of using a navigation bar.

This option allows the user to navigate across multiple pages via an intuitive option that accompanies the user through all its navigation and, at the same time, saves some real-estate.

#### ***Landing Page***

The landing page merely displays the title of the website with a small introductory paragraph. 

This is followed by a giant centered radial FAB, that includes a menu with internal links to the other pages, each one with a representative icon.

On the bottom of the page, a footer is displayed with the company contacts and social links.

#### ***Route overview***

The route overview page gives the user the option to choose out of a dropdown list box the port of origin and the port of destination.

Automatically, a preview of the route will be displayed in a map, followed by the information of the estimate transit time.

The FAB is present at the bottom right of the page.

#### ***Offer request & Unit conversion***

This section of the webpage will be divided into 3 parts.

First, the user will be confrontated with an accordion that will have included a form to request a personalized offer for the coffe he/she is looking for.

Secondly, as the previous last section of the accordion, the user will have the option to choose the units he/she wants to be working with, including weight and currency, as well
as inputing his/her price idea and immeadiately receive the conversions.

Thirdly, right after submitting the form, a module will pop-up confirming that the offer request has been sent, with an overview of the request. At the same moment, a confirmation 
email will be sent to the user and a request email to the company.

#### ***Footer/Contacts***
The footer will include the points of contact with the company, devided into direct contacts and social links, the later represented solely by its representative icon from
[FontAwesome](https://fontawesome.com/ "FontAwesome").

#### ***Modal***
The modal implemented when summiting the form, is one of the best ways to issue immeadiate feedback to the user. This addresses this user need and at the same times gives the user
the sense of being under control of his/her actions.

[[Back to top]](#table-of-contents)

<a></a>

### **Future Features**

[[Back to top]](#table-of-contents)

---

<a></a>

## **Languages, Libraries, Frameworks and Tools**

[[Back to top]](#table-of-contents)

<a></a>

### **Languages**
* [HTML](https://www.w3.org/MarkUp/1995-archive/html-spec.html "HTML")
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html "CSS")
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript")

[[Back to top]](#table-of-contents)

<a></a>

### **Libraries**
* [FontAwesome](https://fontawesome.com/ "FontAwesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Unsplash](https://unsplash.com/ "Unsplash")

[[Back to top]](#table-of-contents)

<a></a>

### **Frameworks**
* [Bootstrap](https://getbootstrap.com/ "Bootstrap")

[[Back to top]](#table-of-contents)

<a></a>

### **Tools**
* [Git](https://git-scm.com/ "Git")
* [Gitpod](https://gitpod.io/ "Gitpod")
* [Balsamiq](https://balsamiq.com/ "Balsamiq")
* [Font Joy](https://fontjoy.com/ "Font Joy")
* [Coolors](https://coolors.co/ "Coolors")
* [Contrast-Checker](https://coolors.co/contrast-checker "Contrast Checker")
* [Free Logo Design](https://www.freelogodesign.org "Free Logo Design")
* [TinyPNG](https://tinypng.com/ "Tiny PNG")
* [ConvertCSV](https://www.convertcsv.com/csv-to-json.htm "ConvertCSV")
* [Favicon](https://favicon.io/favicon-converter/ "Favcicon")
* [Techsini](http://techsini.com/multi-mockup/ "Techsini")
* [W3C-Markup-validation](https://validator.w3.org/ "Markup Validator")
* [W3C-Jigsaw](https://jigsaw.w3.org/css-validator/ "Jigsaw Validator")
* [W3C-Spell Checker](https://www.w3.org/2002/01/spellchecker "Spell Checker")
* [Google-Lightouse](https://developers.google.com/web/tools/lighthouse "Google Lighthouse") 

[[Back to top]](#table-of-contents)

---

[[Back to top]](#table-of-contents)

<a></a>

## **Testing and Debugging**

[[Back to top]](#table-of-contents)

<a></a>

### **Test 1: Responsiveness**

#### **User Stories and Requirements** ####

##### **UX** #####

##### **Execution** #####

##### **Testing** #####

##### **Test result** #####

##### **Conclusion** #####

[[Back to top]](#table-of-contents)

<a></a>

### **Debugging**
#### **Known Bugs and Corrections** ####

##### **Bug** #####
calc.html -> Input field allows negative numbers
##### **(Potential) Corrections** #####
Added 'min="0"' as an attribute of the input element.

##### **Bug** #####
calc.html -> Quantity Input field allows decimal numbers
##### **(Potential) Corrections** #####
Added 'min="0"' as an attribute of the input element.

##### **Bug** #####
calc.html -> for on click of TAB key is not focusing on the next field
##### **(Potential) Corrections** #####
Added tabindex="num" as an attribute of the input and select elements

##### **Bug** #####
calc.html -> anchor tag oc incoterms does not allow spacing before and after.
##### **(Potential) Corrections** #####
Unfixed at the moment

##### **Bug** #####
Access to XMLHttpRequest at 'https://futures.tradingcharts.com/futures/quotes/kc.html?cbase=kc' from origin 'https://8000-e4e47aac-b552-443c-afb5-41a2746ebb9d.ws-eu03.gitpod.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
##### **(Potential) Corrections** #####
Not possible use the load method form jQuery to present the external website info on calc.html.

Therefore, I started implementing this feature with an <iframe> instead.

Nonethless, this option also retreives the following error originated externally:

    Uncaught TypeError: Cannot read property 'querySelector' of undefined
    at getElement (tradingcharts-emailsignup.js:265)
    at tradingcharts-emailsignup.js:34
 
 Additional research [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies "MDN") raises other several concerns with this option.

In the end, I am using solely an external link so user can access the current market prices of the coffee futures for their reference.

##### **Bug** #####
calc.html -> on click funtion of incoterms is not pushing value to selectedIncoterm variable
##### **(Potential) Corrections** #####
Moved .incoterms click function inside the getJSON funtction

##### **Bug** #####
calc.html -> EmailJS receives overview content in a single line.
##### **(Potential) Corrections** #####
"overview": offerRequest.selectedCoffeesBulk.value.replace(/\n/g, "<br>"),


[[Back to top]](#table-of-contents)

---

<a></a>

## **Deployment**

[[Back to top]](#table-of-contents)

---

<a></a>

## **Credits and Acknowledgments**

[[Back to top]](#table-of-contents)

<a></a>

### **Credits**
* [MDN WebDocs](https://developer.mozilla.org/ "MDN WebDocs")
#### **Media**
#### **Content**
*[Incoterms 2020](https://iccwbo.org/resources-for-business/incoterms-rules/incoterms-2020/ "Incoterms")
##### **JSON files**

coffee.json: www.supremo.be and http://www.ico.org/projects/Good-Hygiene-Practices/cnt/cnt_en/sec_3/docs_3.3/Grading%20&%20class.pdf

[[Back to top]](#table-of-contents)

<a></a>

### **Acknowledgments**

[[Back to top]](#table-of-contents)