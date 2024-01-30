import intro from "../assets/images/intro.jpg"
import Container from "../components/ui/Container";

const Home = () => {
    return (
        <Container>
            <div className="flex gap-5 my-32 flex-col md:flex-row">
                <div className="flex-[1]">
                    <h2 className="text-7xl font-bold ">Quality Cleaning <br/><span className="text-orange-400 italic">For Your Home</span> </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magni, non quos quis vero veritatis vitae earum similique nisi corporis, facilis ducimus et assumenda, praesentium id accusamus ut? Nisi labore provident illo molestiae, quam iure qui, ducimus aliquam maxime sapiente deserunt ipsum eum obcaecati possimus voluptatum consequuntur, accusamus deleniti laborum.</p>
                    <div className="flex gap-3 mt-3">
                        <button className="btn btn-success btn-outline font-bold">Booking Now</button>
                        <button className="btn btn-secondary btn-outline">Read More</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://media.istockphoto.com/id/882261976/photo/be-a-leader-and-a-boss.jpg?s=2048x2048&w=is&k=20&c=un4V0b68AcatopZP1iVNfvrVbMXdIdeZWwjZ-nXFD64=" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://media.istockphoto.com/id/882261976/photo/be-a-leader-and-a-boss.jpg?s=2048x2048&w=is&k=20&c=un4V0b68AcatopZP1iVNfvrVbMXdIdeZWwjZ-nXFD64=" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://media.istockphoto.com/id/882261976/photo/be-a-leader-and-a-boss.jpg?s=2048x2048&w=is&k=20&c=un4V0b68AcatopZP1iVNfvrVbMXdIdeZWwjZ-nXFD64=" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://media.istockphoto.com/id/882261976/photo/be-a-leader-and-a-boss.jpg?s=2048x2048&w=is&k=20&c=un4V0b68AcatopZP1iVNfvrVbMXdIdeZWwjZ-nXFD64=" />
                                </div>
                            </div>
                        </div>
                        <div>Rating 5 star</div>
                    </div>

                </div>
                <div className="flex-[1]">
                    <img className="rounded-md overflow-hidden" src={intro} alt="" />
                </div>
            </div>
            </Container>
        
    );
};

export default Home;