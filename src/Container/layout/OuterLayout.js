import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Layout } from './LayoutStyling'
import { Header } from './LayoutStyling'
import { DisplayArea } from './LayoutStyling'
import { Sidebar } from './LayoutStyling'
import { ContentArea } from './LayoutStyling'
import { Footer } from './LayoutStyling'

export const OuterLayout = () => {
  return (
<Layout>
    <Header/>
    <DisplayArea>
     <Sidebar>
       <Link  to='select'>Select Component</Link>
       <Link to='temp'> Icon inputs</Link>
       <Link  to='text'>Text Components</Link>
       <Link  to='input'>Input Components</Link>
       <Link  to='link'>Link Components</Link>
     </Sidebar>
     <ContentArea>
       
      <div>
      <Outlet/>
      
      <p>Lorem ipsum dolor sit amet. Est earum saepe qui internos exercitationem sit dicta quia eum amet laboriosam aut laboriosam ullam ut mollitia quia? Vel voluptas numquam sed repellendus nesciunt est quaerat reiciendis quo aperiam harum. Et possimus corrupti in dolores magni qui perferendis rerum. </p><p>Non accusamus explicabo sed velit quisquam ut ducimus doloremque ea internos provident ut perferendis veritatis sit enim iusto. 33 omnis neque aut omnis alias qui asperiores sint ut nihil architecto quo assumenda dolorum rem quae culpa. Qui commodi facilis et rerum temporibus id similique error ex architecto asperiores quo quas rerum qui assumenda voluptatem! Ut quasi numquam ut omnis quod quo excepturi officia a dolore possimus. </p><p>Ex dolores fuga  impedit molestiae aut Quis excepturi non nobis magnam est commodi aspernatur quo natus ipsa. Sed voluptatem ullam At aspernatur odio est earum vitae sit voluptatem quibusdam aut rerum ullam a alias nulla  voluptatem dolorem. Qui iste neque non magni enim quo impedit  ex laudantium officia. </p>
      <p>Lorem ipsum dolor sit amet. Est earum saepe qui internos exercitationem sit dicta quia eum amet laboriosam aut laboriosam ullam ut mollitia quia? Vel voluptas numquam sed repellendus nesciunt est quaerat reiciendis quo aperiam harum. Et possimus corrupti in dolores magni qui perferendis rerum. </p><p>Non accusamus explicabo sed velit quisquam ut ducimus doloremque ea internos provident ut perferendis veritatis sit enim iusto. 33 omnis neque aut omnis alias qui asperiores sint ut nihil architecto quo assumenda dolorum rem quae culpa. Qui commodi facilis et rerum temporibus id similique error ex architecto asperiores quo quas rerum qui assumenda voluptatem! Ut quasi numquam ut omnis quod quo excepturi officia a dolore possimus. </p><p>Ex dolores fuga  impedit molestiae aut Quis excepturi non nobis magnam est commodi aspernatur quo natus ipsa. Sed voluptatem ullam At aspernatur odio est earum vitae sit voluptatem quibusdam aut rerum ullam a alias nulla  voluptatem dolorem. Qui iste neque non magni enim quo impedit  ex laudantium officia. </p>
      <p>Lorem ipsum dolor sit amet. Est earum saepe qui internos exercitationem sit dicta quia eum amet laboriosam aut laboriosam ullam ut mollitia quia? Vel voluptas numquam sed repellendus nesciunt est quaerat reiciendis quo aperiam harum. Et possimus corrupti in dolores magni qui perferendis rerum. </p><p>Non accusamus explicabo sed velit quisquam ut ducimus doloremque ea internos provident ut perferendis veritatis sit enim iusto. 33 omnis neque aut omnis alias qui asperiores sint ut nihil architecto quo assumenda dolorum rem quae culpa. Qui commodi facilis et rerum temporibus id similique error ex architecto asperiores quo quas rerum qui assumenda voluptatem! Ut quasi numquam ut omnis quod quo excepturi officia a dolore possimus. </p><p>Ex dolores fuga  impedit molestiae aut Quis excepturi non nobis magnam est commodi aspernatur quo natus ipsa. Sed voluptatem ullam At aspernatur odio est earum vitae sit voluptatem quibusdam aut rerum ullam a alias nulla  voluptatem dolorem. Qui iste neque non magni enim quo impedit  ex laudantium officia. </p>
      <p>Lorem ipsum dolor sit amet. Est earum saepe qui internos exercitationem sit dicta quia eum amet laboriosam aut laboriosam ullam ut mollitia quia? Vel voluptas numquam sed repellendus nesciunt est quaerat reiciendis quo aperiam harum. Et possimus corrupti in dolores magni qui perferendis rerum. </p><p>Non accusamus explicabo sed velit quisquam ut ducimus doloremque ea internos provident ut perferendis veritatis sit enim iusto. 33 omnis neque aut omnis alias qui asperiores sint ut nihil architecto quo assumenda dolorum rem quae culpa. Qui commodi facilis et rerum temporibus id similique error ex architecto asperiores quo quas rerum qui assumenda voluptatem! Ut quasi numquam ut omnis quod quo excepturi officia a dolore possimus. </p><p>Ex dolores fuga  impedit molestiae aut Quis excepturi non nobis magnam est commodi aspernatur quo natus ipsa. Sed voluptatem ullam At aspernatur odio est earum vitae sit voluptatem quibusdam aut rerum ullam a alias nulla  voluptatem dolorem. Qui iste neque non magni enim quo impedit  ex laudantium officia. </p>
      <p>Lorem ipsum dolor sit amet. Est earum saepe qui internos exercitationem sit dicta quia eum amet laboriosam aut laboriosam ullam ut mollitia quia? Vel voluptas numquam sed repellendus nesciunt est quaerat reiciendis quo aperiam harum. Et possimus corrupti in dolores magni qui perferendis rerum. </p><p>Non accusamus explicabo sed velit quisquam ut ducimus doloremque ea internos provident ut perferendis veritatis sit enim iusto. 33 omnis neque aut omnis alias qui asperiores sint ut nihil architecto quo assumenda dolorum rem quae culpa. Qui commodi facilis et rerum temporibus id similique error ex architecto asperiores quo quas rerum qui assumenda voluptatem! Ut quasi numquam ut omnis quod quo excepturi officia a dolore possimus. </p><p>Ex dolores fuga  impedit molestiae aut Quis excepturi non nobis magnam est commodi aspernatur quo natus ipsa. Sed voluptatem ullam At aspernatur odio est earum vitae sit voluptatem quibusdam aut rerum ullam a alias nulla  voluptatem dolorem. Qui iste neque non magni enim quo impedit  ex laudantium officia. </p>
      <p>Lorem ipsum dolor sit amet. Est earum saepe qui internos exercitationem sit dicta quia eum amet laboriosam aut laboriosam ullam ut mollitia quia? Vel voluptas numquam sed repellendus nesciunt est quaerat reiciendis quo aperiam harum. Et possimus corrupti in dolores magni qui perferendis rerum. </p><p>Non accusamus explicabo sed velit quisquam ut ducimus doloremque ea internos provident ut perferendis veritatis sit enim iusto. 33 omnis neque aut omnis alias qui asperiores sint ut nihil architecto quo assumenda dolorum rem quae culpa. Qui commodi facilis et rerum temporibus id similique error ex architecto asperiores quo quas rerum qui assumenda voluptatem! Ut quasi numquam ut omnis quod quo excepturi officia a dolore possimus. </p><p>Ex dolores fuga  impedit molestiae aut Quis excepturi non nobis magnam est commodi aspernatur quo natus ipsa. Sed voluptatem ullam At aspernatur odio est earum vitae sit voluptatem quibusdam aut rerum ullam a alias nulla  voluptatem dolorem. Qui iste neque non magni enim quo impedit  ex laudantium officia. </p>
      </div>

      
     </ContentArea>
    </DisplayArea>
    <Footer> shsus </Footer>
    </Layout>
  )
}
