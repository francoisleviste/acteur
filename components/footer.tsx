export default function Footer() {
    return (
        <>
            <style jsx>{`
                .myska {
                    font-family: 'Calligraffitti', cursive;
                    color: #dba400
                }
                p {
                    color: white;
                    padding-right: 10px;
                    padding-bottom: 25px;
                }
                .foot{
                    background-color: black;
                }
            `}</style>
            <div className="foot">
                <p className="text-end">Created by : <span className="myska">MaySk@</span></p>
            </div>
        </>
    )
}