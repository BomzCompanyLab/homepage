import Link from "next/link";
import Image from "next/image";

import menus from "./menus";
import './css/main.css';

import imgMainScrumIcon from "/public/images/main_scrum_icon.png";
import imgMainKanbanIcon from "/public/images/main_kanban_icon.png";
import imgMainBufferIcon from "/public/images/main_buffer_icon.png";
import imgMainAgile from "/public/images/main_agile.png";
import imgMainBoard1 from "/public/images/main_board_1.png";
import imgMainBoard2 from "/public/images/main_board_2.png";
import imgMainBoard3 from "/public/images/main_board_3.png";
import imgMainIssue from "/public/images/main_issue.png";
import imgMainStr from "/public/images/main_str.png";
import imgMainOnline from "/public/images/main_online.png";
import imgMainCustom from "/public/images/main_custom.png";
import imgMainMessenger from "/public/images/main_messenger.png";
import imgMainStep4Icon1 from "/public/images/main_step4_icon1.png";
import imgMainStep4Icon2 from "/public/images/main_step4_icon2.png";
import imgMainStep4Icon3 from "/public/images/main_step4_icon3.png";
// import imgMainStep4Icon4 from "/public/images/main_step4_icon4.png";
// import imgMainStep4Icon5 from "/public/images/main_step4_icon5.png";
import imgMainStep4Icon6 from "/public/images/main_step4_icon6.png";
import imgMainStep4Icon7 from "/public/images/main_step4_icon7.png";
// import imgMainStep4Icon8 from "/public/images/main_step4_icon8.png";
// import imgMainStep4Icon9 from "/public/images/main_step4_icon9.png";
import imgMainStep4Icon10 from "/public/images/main_step4_icon10.png";
import imgMainStep4Icon11 from "/public/images/main_step4_icon11.png";
import imgMainStep4Icon12 from "/public/images/main_step4_icon12.png";

const MainPage = () => {
  return (
    <div className="main">
      <section className="step step1">
        <div className="box flex-center">
          <article className="w60p">
            <h1>소프트웨어 업무 협업도구.</h1>
            <h1>애자일 조직을 위한. 프로젝트 관리를 위한.</h1>
            <h3 style={{marginTop:'36px'}}>모든 회사와 팀을 위한 협업도구로 이슈를 추적하고 스프린트 계획을 적용해보세요</h3>
            
            <nav>
              <Link href="https://bora.bomz.app" target="_blank">
                <button className="bombora-link">봄보라 이용하기</button>
              </Link>
            </nav>

            <div className="summery">
              <section>
                <Image src={imgMainScrumIcon} className="summery" alt="SCRUM" title="SCRUM"/>
                <article>
                  <h3>SCRUM</h3>
                  <h4>점진적 개발</h4>
                </article>
              </section>

              <section>
                <Image src={imgMainKanbanIcon} className="summery" alt="KANBAN" title="KANBAN"/>
                <article>
                  <h3>KANBAN</h3>
                  <h4>업무 시각화</h4>
                </article> 
              </section>

              <section>
                <Image src={imgMainBufferIcon} className="summery" alt="BUFFER" title="BUFFER"/>
                <article>
                  <h3>BUFFER</h3>
                  <h4>단순 분담</h4>
                </article> 
              </section>
            </div>
          </article>
          <article className="w40p m-mt40p v-align-end">
            <Image src={imgMainAgile} alt="AGILE" title="AGILE"/>
          </article>
        </div>
      </section>

      <section className="step step2">
        <article className="line">{ /** 사선 배경 부분 */}</article>
        <article className="flex-center content">
          <div className="box flex-start">
            <section className="w40p">
              <Image src={imgMainIssue} alt="AGILE" title="AGILE"/>
            </section>
            <section className="w60p m-mt60">
              <h1 className="m-inline">이슈 추적과 이력 관리 </h1>
              <h2 className="m-inline" style={{marginBottom:'60px'}}>팀원간의 업무 할당으로 프로젝트를 진행하세요</h2>
              <h3>소프트웨어 개발 협업을 좀 더 효율적 진행하세요</h3>
              <h3 style={{marginTop:'14px'}}>신규 개발부터 유지보수까지 팀에 맞는 방법으로로 주기적인 배포를 수행하거나 CS를 통해 이슈 발생 시 적절한 담당자에게 할당하세요</h3>
              <h3 style={{marginTop:'14px'}}>담당자를 직접 지정해서 이슈를 할당할 수도 있고 대기 상태의 이슈를 스스로 가져와서 진행할 수도 있습니다</h3>
              <h3 style={{marginTop:'14px'}}>모든건 팀의 업무 방식에 맞게 진행하세요</h3>
            </section>
          </div>
        </article>
        <article className="line">{ /** 사선 배경 부분 */}</article>
      </section>

      <section className="step step3">
        <div className="box">
          <h1 className="m-mb40">강력한 스크럼과 칸반 보드</h1>
          <h3 className="m-inline" style={{marginTop:'40px'}}>단순 구조의 보드부터 3단 구조의 보드까지 사용자가 직접 보드의 모양을 구성하여 회사 또는 팀의 업무 방식에 맞게 프로젝트의 이슈를 관리하세요</h3>

          <section className="flex-start step3-1">
            <article className="board">
              <div>
                <Image src={imgMainBoard1} alt="BOARD1" title="BOARD1"/>
              </div>
              <h3>단순 구조 보드</h3>
              <h4 className="desc">일반적으로 많이 사용하는 기본 형태의 보드로 가로열을 업무 진행 단위별로 구분하여 진행상황을 표시하는 보드 형태</h4>
            </article>

            <article className="board">
              <div>
                <Image src={imgMainBoard2} alt="BOARD2" title="BOARD2"/>
              </div>
              <h3>2단 구조 보드</h3>
              <h4 className="desc">진행 단위별로 세로열을 세분화하여 하나 이상의 진행단계를 담당자 및 이벤트 또는 진행하는 팀의 목적에 맞게 분리하여 표시하는 보드 형태</h4>
            </article>

            <article className="board">
              <div>
                <Image src={imgMainBoard3} alt="BOARD3" title="BOARD3"/>
              </div>
              <h3>3단 구조 보드</h3>
              <h4 className="desc">진행 단위별로 세로열을 세분화한 후 또 다시 각각의 항목을 목적에 맞게 분리하여 구성한 고급 사용자를 위한 보드 형태</h4>
            </article>
          </section>

          <section className="flex-start step3-2" style={{marginTop:"160px"}}>
            <Image src={imgMainStr} alt="BOMBORA Structure" title="BOMBORA Structure"/>
            <article className="board">
              <div>
                <h1>애자일을 위한 봄보라.</h1>
              </div>
              <div>
                <h3 className="m-inline">봄보라는 소프트웨어 개발과 기획, QA 팀들의 협업을 위한 솔루션으로 업무 계획과 진행 상태, 버그 및 이슈 추적 등 프로젝트 관리에 최적화된 기능을 제공합니다</h3>
              </div>
              <div>
                <h3 className="m-inline">애자일 방법론을 이용하려는 팀뿐만 아니라 계획된 업무를 작은 단위로 기록하고 순차적으로 진행하는 단순하지만 간편한 방식을 선호하는 팀에도 추천합니다</h3>
              </div>
              <div className="summery m-inline-flex">
                <section>
                  <Image src={imgMainCustom} className="summery" alt="Custom Board" title="Custom Board"/>
                  <article>
                    <h3>프로젝트별</h3>
                    <h4>맞춤 보드</h4>
                  </article>
                </section>
                <section>
                  <Image src={imgMainMessenger} className="summery" alt="Event Push" title="Event Push"/>
                  <article>
                    <h3>이벤트 발생 시</h3>
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
            <section className="box flex-start">
              <div className="w60p">
                <section className="icons m-mt60">
                  <Image src={imgMainStep4Icon1} className="summery" alt="BOMBORA Step4-1" title="BOMBORA Step4-1"/>
                  <Image src={imgMainStep4Icon2} className="summery" alt="BOMBORA Step4-2" title="BOMBORA Step4-2"/>
                  <Image src={imgMainStep4Icon3} className="summery mm-hide" alt="BOMBORA Step4-3" title="BOMBORA Step4-3"/>
                  {/* <Image src={imgMainStep4Icon4} className="summery m-hide" alt="BOMBORA Step4-4" title="BOMBORA Step4-4"/> */}
                  {/* <Image src={imgMainStep4Icon5} className="summery m-hide" alt="BOMBORA Step4-5" title="BOMBORA Step4-5"/> */}
                  <Image src={imgMainStep4Icon6} className="summery ms-hide" alt="BOMBORA Step4-6" title="BOMBORA Step4-6"/>
                </section>
                <section className="icons">            
                  <Image src={imgMainStep4Icon7} className="summery" alt="BOMBORA Step4-7" title="BOMBORA Step4-7"/>
                  {/* <Image src={imgMainStep4Icon8} className="summery" alt="BOMBORA Step4-8" title="BOMBORA Step4-8"/> */}
                  {/* <Image src={imgMainStep4Icon9} className="summery" alt="BOMBORA Step4-9" title="BOMBORA Step4-9"/> */}
                  <Image src={imgMainStep4Icon10} className="summery" alt="BOMBORA Step4-10" title="BOMBORA Step4-10"/>
                  <Image src={imgMainStep4Icon11} className="summery mm-hide" alt="BOMBORA Step4-11" title="BOMBORA Step4-11"/>
                  <Image src={imgMainStep4Icon12} className="summery ms-hide" alt="BOMBORA Step4-12" title="BOMBORA Step4-12"/>
                </section>
              </div>
              <div className="w40p text-right m-text-center">
                <Image src={imgMainOnline} alt="Kanban Bomz" title="Kanban Bomz"/>
              </div>
            </section>
            
          </div>
        </article>
      </section>

      <section className="step step5">
        <div className="box flex-center">
          <article className="w50p-20px">
            <h1 className="m-mb40">지금 바로 무료로 이용하세요</h1>
            <h3 style={{marginTop: '50px'}} className="m-inline">봄즈의 봄보라 솔루션은 현재 베타 서비스 기간으로 무료 기능만 이용하실 수 있습니다</h3>
            <h5></h5>
            <h3 style={{marginTop: '26px'}} className="m-inline">향후 무료 서비스 기간 종료 후에도 현재 이용중인 서비스는 그대로 이용하실 수 있으며 추가적인 일부 기능만 유료 서비스로 제공됩니다</h3>
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
                  <li><h4>프로젝트 최대 5개 (베타 서비스 중 무제한)</h4></li>
                  <li><h4>스크럼, 칸반, 버퍼</h4></li>
                  <li><h4>사용자 계정 최대 10개</h4></li>
                  <li><h4>계정별 권한 관리</h4></li>
                  <li><h4>부서 정보 최대 50개</h4></li>
                  <li><h4>직책 정보 최대 30개</h4></li>
                  <li><h4>이벤트 알림 이메일 + 메신저</h4></li>
                  <li><h4>첨부파일 최대 100MB</h4></li>
                  <li><h4>이력 조회</h4></li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
