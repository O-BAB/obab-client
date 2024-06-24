import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
import CategoryViewComponent from 'component/recipe/CategoryViewComponent'


const Post = () => {

  return (
    <>
      <NavbarComponent/>
      <CategoryViewComponent/>
      <Footer/>
    </>
  );
};
export default Post;
