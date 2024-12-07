import '@/app/css/prc.css';

const Pricing = () =>{

    return (
        <div className="prc">
            <section className="step1 box">
                <h1 className="title">모든 조직을 생각하는 합리적인 가격</h1>
                <h3 style={{marginTop:'40px'}}>봄보라 솔루션은 현재 베타 기간으로 무료 기본 서비스만 제공 중 입니다</h3>
            </section>

            <section className="step2 box">
                <h5 style={{marginTop:'120px', textAlign:'right'}}>부가세 별도</h5>
                <article className="flex-between">

                    <section className="price-plan">
                        <article className="price free">
                            <h1>무료</h1>
                            <h3>평생 무료 서비스</h3>
                            <h1 className="money">₩ 0</h1>
                        </article>

                        <article className="details">
                            <ul>
                                <li><h4>프로젝트 최대 5개 (베타서비스 중 무제한)</h4></li>
                                <li><h4>사용자 계정 최대 10개</h4></li>
                                <li><h4>계정별 권한 관리</h4></li>
                                <li><h4>부서 정보 최대 50개</h4></li>
                                <li><h4>직책 정보 최대 30개</h4></li>
                                <li><h4>이벤트 알림 이메일 + 메신저</h4></li>
                                <li><h4>첨부파일 최대 100MB</h4></li>
                                <li><h4>이력 조회</h4></li>
                            </ul>
                        </article>
                    </section>

                    <section className="price-plan">
                        <article className="price standard">
                            <h1>기본</h1>
                            <h3>보안 강화 및 프로젝트 수 제한 해제</h3>
                            <div><h1 className="money">₩ 9,000</h1></div>
                            <h4>사용자/월 기준</h4>
                        </article>

                        <article className="details">
                            <ul>
                                <li><h4>무제한 프로젝트</h4></li>
                                <li><h4>사용자 계정 최대 1,000개</h4></li>
                                <li><h4>부서 정보 최대 100개</h4></li>
                                <li><h4>직책 정보 최대 200개</h4></li>
                                <li><h4>첨부파일 최대 100GB</h4></li>
                                <li><h4>보안 기능</h4></li>
                                <li className="sub"><h4>접속 IP 제한</h4></li>
                                <li className="sub"><h4>2단계 인증</h4></li>
                            </ul>
                        </article>
                    </section>

                    <section className="price-plan">
                        <article className="price premium">
                            <h1>고급</h1>
                            <h3>협업 기능 강화</h3>
                            <h1 className="money">₩ 15,000</h1>
                            <h4>사용자/월 기준</h4>
                        </article>

                        <article className="details">
                            <ul>
                                <li><h4>사용자 계정 무제한</h4></li>
                                <li><h4>부서 정보 최대 1,000개</h4></li>
                                <li><h4>직책 정보 최대 800개</h4></li>
                                <li><h4>첨부파일 최대 400GB</h4></li>
                                <li><h4>외부 개인 계정 프로젝트 초대</h4></li>
                            </ul>
                        </article>
                    </section>

                </article>
            </section>
        </div>
    )
}

export default Pricing;