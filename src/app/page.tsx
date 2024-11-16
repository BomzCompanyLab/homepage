import Link from "next/link";
import menus from "./menus";
import './css/main.css';

const MainPage = () => {
  return (
    <div className="main">
      <section className="step step1">
        <div className="box flex-center">
          <article className="w50p">
            <h1>소프트웨어 업무 협업도구.</h1>
            <h1>애자일 조직을 위한. 프로젝트 관리를 위한.</h1>
            <h3 style={{marginTop:'36px'}}>모든 회사와 팀을 위한 협업도구로 이슈를 추적하고</h3>
            <h3>스프린트 계획을 적용해보세요</h3>
            
            <nav>
              <Link href="https://bora.bomz.app" target="_blank">
                <button className="bombora-link">봄보라 이용하기</button>
              </Link>
            </nav>

            <div className="summery">
              <section>
                <img src="/images/main_scrum_icon.png" className="summery" />
                <article>
                  <h4>SCRUM</h4>
                  <h4>점진적 개발방법론</h4>
                </article>
              </section>

              <section>
                <img src="/images/main_kanban_icon.png" className="summery" />
                <article>
                  <h4>KANBAN</h4>
                  <h4>칸반보드 업무 시각화</h4>
                </article> 
              </section>

              <section>
                <img src="/images/main_buffer_icon.png" className="summery" />
                <article>
                  <h4>BUFFER</h4>
                  <h4>단순한 업무 분담</h4>
                </article> 
              </section>
            </div>
          </article>
          <article className="w50p">
            <img src="/images/main_agile.png" className="agile"/>
          </article>
        </div>
      </section>

      <section className="step step2">
        <article className="line">{ /** 사선 배경 부분 */}</article>
        <article className="flex-center content">
          <div className="box flex-start">
            <section className="w40p">
              <h1 className="m-inline">이슈 추적과 이력 관리 </h1>
              <h1 className="m-inline">팀원간의 업무 할당을 통해 </h1>
              <h1 className="m-inline">프로젝트를 진행하세요</h1>
            </section>
            <section className="w60p m-mt60">
              <h3>소프트웨어 개발 협업을 좀 더 효율적 진행하세요</h3>
              <h3 style={{marginTop:'14px'}}>신규 프로젝트 개발부터 기존 프로젝트의 유지보수까지 여러분의 팀에 맞는 방법을 선택하여 주기적인</h3>
              <h3>배포를 수행하거나 CS를 통해 이슈가 발생할 때마다 적절한 담당자에게 할당하세요</h3>
              <h3>담당자를 직접 지정해서 이슈를 할당할 수도 있고 대기 상태의 이슈를 스스로 가져와서 진행할 수도 있습니다</h3>
              <h3>모든건 팀의 업무 방식에 맞게 진행하세요</h3>
              <h3 style={{marginTop:'14px'}}>봄즈의 봄보라 솔루션이 모든 기능을 제공합니다</h3>
            </section>
          </div>
        </article>
        <article className="line">{ /** 사선 배경 부분 */}</article>
      </section>

      <section className="step step3">
        <div className="box">
          <h1 className="m-mb40">강력한 스크럼과 칸반 보드</h1>
          <h3 className="m-inline" style={{marginTop:'40px'}}>단순 구조의 보드부터 3단 구조의 보드까지 사용자가 직접 보드의 모양을 구성하여</h3>
          <h3 className="m-inline">회사 또는 팀의 업무 방식에 맞게 프로젝트의 이슈를 관리하세요</h3>

          <section className="flex-start step3-1">
            <article className="board">
              <div className="img">
                <img src="/images/main_board_1.png"/>
              </div>
              <h3>단순 구조 보드</h3>
              <h4 className="desc">일반적으로 많이 사용하는 기본 형태의 보드로 가로열을 업무 진행 단위별로 구분하여 진행상황을 표시하는 보드 형태</h4>
            </article>

            <article className="board">
              <div className="img">
                <img src="/images/main_board_2.png"/>
              </div>
              <h3>2단 구조 보드</h3>
              <h4 className="desc">진행 단위별로 세로열을 세분화하여 하나 이상의 진행단계를 담당자 및 이벤트 또는 진행하는 팀의 목적에 맞게 분리하여 표시하는 보드 형태</h4>
            </article>

            <article className="board">
              <div className="img">
                <img src="/images/main_board_3.png"/>
              </div>
              <h3>3단 구조 보드</h3>
              <h4 className="desc">진행 단위별로 세로열을 세분화한 후 또 다시 각각의 항목을 목적에 맞게 분리하여 구성한 고급 사용자를 위한 보드 형태</h4>
            </article>
          </section>

          <section className="flex-start step3-2" style={{marginTop:"160px"}}>
            <img src="/images/main_str.png" />
            <article className="board">
              <div>
                <h1>애자일 프로젝트 관리를 위한 봄보라.</h1>
              </div>
              <div>
                <h3 className="m-inline">봄보라는 소프트웨어 개발과 기획, QA 팀들의 </h3>
                <h3 className="m-inline">협업을 위한 솔루션으로 업무 계획과 진행 상태, 버그 및 이슈 추적 등 프로젝트 관리에 </h3>
                <h3 className="m-inline">최적화된 기능을 제공합니다</h3>
              </div>
              <div>
                <h3 className="m-inline">애자일 방법론을 이용하려는 프로젝트팀뿐만 아니라 계획된 업무를 작은 단위로 기록하고 </h3>
                <h3 className="m-inline">순차적으로 하나씩 진행하는 단순하지만 간편한 방식을 선호하는 팀에도 추천합니다</h3>
              </div>
              <div className="summery m-inline-flex">
                <section>
                  <img src="/images/main_custom.png" className="summery"/>
                  <article>
                    <h4>프로젝트별</h4>
                    <h4>맞춤 보드</h4>
                  </article>
                </section>
                <section>
                  <img src="/images/main_messenger.png" className="summery"/>
                  <article>
                    <h4>이벤트 발생 시</h4>
                    <h4>담당자 알림</h4>
                  </article>
                </section>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section className="step step4">
        <article className="line">{ /** 사선 배경 부분 */}</article>
        <article className="flex-center content">
          <div className="box">
            <h1 className="m-mb40">봄보라는 클라우드 기반으로 언제 어디서든 협업할 수 있습니다</h1>
            <h3>팀의 업무 방식에 맞게 보드를 상세하게 구성하세요</h3>
            <h3>각각의 업무 카드별로 이슈를 추가할 수 있고 의견을 등록할 수도 있어요</h3>
            <h3>모든 업무의 처리 현황은 이력이 저장되어 언제든 확인할 수 있습니다</h3>
            <section className="icons m-mt60">
              <img src="/images/main_step4_icon1.png" className="summery" />
              <img src="/images/main_step4_icon2.png" className="summery" />
              <img src="/images/main_step4_icon3.png" className="summery" />
              <img src="/images/main_step4_icon4.png" className="summery" />
              <img src="/images/main_step4_icon5.png" className="summery" />
              <img src="/images/main_step4_icon6.png" className="summery" />
            </section>
            <section className="icons">            
              <img src="/images/main_step4_icon7.png" className="summery" />
              <img src="/images/main_step4_icon8.png" className="summery" />
              <img src="/images/main_step4_icon9.png" className="summery" />
              <img src="/images/main_step4_icon10.png" className="summery" />
              <img src="/images/main_step4_icon11.png" className="summery" />
              <img src="/images/main_step4_icon12.png" className="summery" />
            </section>
          </div>
        </article>
      </section>

      <section className="step step5">
        <div className="box flex-center">
          <article className="w50p">
            <h1 className="m-mb40">지금 바로 무료로 이용하세요</h1>
            <h3 style={{marginTop: '50px'}} className="m-inline">봄즈의 봄보라 솔루션은 현재 베타 서비스 기간으로</h3>
            <h3 className="m-inline">무료 기능만 이용하실 수 있습니다</h3>
            <h5></h5>
            <h3 style={{marginTop: '26px'}} className="m-inline">향후 무료 서비스 기간 종료 후에도 현재 이용중인 서비스는 그대로</h3>
            <h3 className="m-inline">이용하실 수 있으며 추가적인 일부 기능만 유료 서비스로 제공됩니다</h3>
            <nav>
              <Link href={menus[0].url}>
                <button className="bombora-link">요금 정책 보기</button>
              </Link>
              <Link href="https://bora.bomz.app" target="_blank" style={{marginLeft:'40px'}}>
                <button className="bombora-link">봄보라 이용하기</button>
              </Link>
            </nav>
          </article>
          <article className="w50p">
            <div className="price-plan">
              <section className="price">
                <h1>무료</h1>
                <h3>평생 무료 서비스</h3>
                <h1 className="money">₩ 0</h1>
              </section>

              <section className="details">
                <ul>
                  <li><h4>무제한 프로젝트 생성 관리</h4></li>
                  <li><h4>사용자 계정 최대 10개</h4></li>
                  <li><h4>계정별 권한 관리</h4></li>
                  <li><h4>부서 정보 최대 50개</h4></li>
                  <li><h4>직책 정보 최대 30개</h4></li>
                  <li><h4>이벤트 알림 설정 이메일 + 메신저 최대 1개</h4></li>
                  <li><h4>첨부파일 최대 100MB</h4></li>
                </ul>
              </section>
            </div>
          </article>
        </div>
        <div className="box" style={{marginTop:'140px'}}>
          <img src="/images/main_bottom.png" />
        </div>
      </section>
    </div>
  );
}

export default MainPage;
