import React, { Component } from 'react';
import logo from './subletPic/home.jpg';
import logo2 from './subletPic/home2.jpg';
import { Button, Image, List, Header } from 'semantic-ui-react';

const Vision = (details) => (

<div style={{ textAlign: "right" }}>
    {/* <h2 style={{ textAlign: "center" }}>  SubMe vision </h2> */}
    <Header as='h2' color='violet' style={{ textAlign: "center" }} >
    SubMe vision
    </Header>
    <p> 
         יצירת מערכת שיתופית המרכזת במקום אחד, באופן בהיר, נגיש ויעיל, מודעות סאבלט, בחינם, ללא עלויות ו\או עמלות תיווך כלשהן, תוך שמירה על שקיפות ותחושת ביטחון
        </p>
      
      <p>  חיסכון בזמן – ייעול תהליך החיפוש ומציאת הסאבלט המבוקש על-פי דרישות וקטגוריות ברורות </p>

        <p> חווית משתמש – חווית משתמש אינטואיטיבית המותאמת לתהליך מציאת סאבלט באופן היעיל והמהיר ביותר </p>
        <p>תחושת ביטחון – הענקת תחושת ביטחון ל"סגירת" התהליך מתחילתו – שלב החיפוש ועד סופו – שלב העברת פרטים אישיים ותשלום </p>
        <p> חיסכון ושימוש חברתי – שמירה על עיקרון השימוש במערכת כשימוש חברתי – בין חברים וללא עלות או גזירת קופון מביצוע העסקה
        
    </p>

        <br />

        <div>
        <Image src={logo} size='big' centered  />
   {/* <Image src={logo} fluid />  */}
       </div>
        <br />
        <br />


    
</div>
)

const FAQ = () => (

  <div style={{ textAlign: "right" }}>
  <Header as='h2' color='violet' style={{ textAlign: "center" }} >
  FAQ
    </Header>
  <List divided relaxed>
    <List.Item>
      <List.Icon name='question' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header color='blue'>האם ניתן לשלם דרך האתר </List.Header>
        <List.Description  as='blue'> לא ניתן לשלם דרך האתר , אך קיימים לינקים לאתרים מאובטחים בהם ניתן לשלם עבור העסקה </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='question' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header color='blue'> מה זה סאבלט  </List.Header>
        <List.Description  as='blue'> 
        <a href="https://www.mako.co.il/finances-real-estate/Article-845f89c2557de51006.htm"> ממליץ לך לקרוא את הכתבה הבאה </a>
         </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='question' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header > SubMe מה היתרון של </List.Header>
        <List.Description > מערכת חיפוש יעילה חכמה וחברתית </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='question' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header >האם השירות באתר כרוך בתשלום</List.Header>
        <List.Description >לא, השירות חינמי לחלוטין</List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='question' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header > מעולם לא ביצעתי סאבלט ואני חושש לעשות זאת </List.Header>
        <List.Description > Just Do It אל תדאג אתה בידיים טובות </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='question' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header >  Check Your Tariff Sublet מה עושה כפתור </List.Header>
        <List.Description > זוהי אפשרות לבדוק האם מחיר הדירה שפרסמת גבוהה משמעותית ממחיר השוק </List.Description>
      </List.Content>
    </List.Item>

  </List>

   <div>
  <br/>
    <Image src='data:image/png;base64,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' href="https://www.paypal.com/il/home?locale.x=he_IL" floated='left' size='small' /> 
    <Image src='data:image/jpeg;base64,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' href="https://www.bitpay.co.il/" centered size='small' />
   </div>

   <div>
   <br/>
   <br/>
   <Image src={logo2} size='big' centered  />
   {/* <Image src={logo2} fluid />  */}
   </div>

  </div>
  )


class WeAreSubMe extends Component {
  constructor() {
    super();
    this.state = {
        vision: 1,
        FAQ: 0,
    }
};

change = (e) => {
 // debugger;
  if (e.target.name === "Vision") {
      this.setState({
         vision : 1,
         FAQ : 0,
                    });
  }
  if (e.target.name === "FAQ") {
    this.setState({
      vision : 0,
      FAQ : 1,
                 });
  }
 
};

    render() {
        return (
            <div>
       <Button name="Vision" color='olive' onClick={e => this.change(e)}  > SubMe Vision </Button>
       <Button name="FAQ" color='olive'  onClick={e => this.change(e)}  > FAQ </Button>
       <br />
       <br />
    
       {
         this.state.FAQ === 1 && FAQ()
       }
 
       {
         this.state.vision === 1 && Vision()
       }

                </div>
                

                );
        
            }
        }
        
        export default WeAreSubMe;