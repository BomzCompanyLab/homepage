
const MainPage = () => {
  return (
    <>
    <section className="step1">
      <div className="box flex-center">
        <article className="w50p">
          <h1>소프트웨어 업무 협업도구.</h1>
          <h1>애자일 조직을 위한. 프로젝트 관리를 위한.</h1>
          <h3 style={{marginTop:'36px'}}>모든 회사와 팀을 위한 협업도구로 이슈를 추적하고</h3>
          <h3>스프린트 계획을 적용해보세요</h3>
          <div className="content">
            <section>
              <img src="/images/main_scrum_icon.png" />
              <div className="desc">
                <div className="desc-title">SCRUM</div>
                <div className="desc-sub">점진적 개발방법론</div>
              </div>
            </section>

            <section>
              <img src="/images/main_kanban_icon.png" />
              <div className="desc">
                <div className="desc-title">KANBAN</div>
                <div className="desc-sub">칸반보드 업무 시각화</div>
              </div>
            </section>

            <section>
              <img src="/images/main_buffer_icon.png" />
              <div className="desc">
                <div className="desc-title">BUFFER</div>
                <div className="desc-sub">단순한 업무 분담</div>
              </div>
            </section>
          </div>
        </article>
        <article className="w50p">
          <img src="/images/main_agile.png" />
        </article>
      </div>
    </section>

    <section className="step2">
      <article className="line">{ /** 사선 배경 부분 */}</article>
      <article className="flex-center content">
        <div className="box">
          
        </div>
      </article>
      <article className="line">{ /** 사선 배경 부분 */}</article>
    </section>

    <section className="step3">
      <div className="box">
        <h1>강력한 스크럼과 칸반 보드</h1>
        <h3 style={{marginTop:'40px'}}>단순 구조의 보드부터 3단 구조의 보드까지 사용자가 직접 보드의 모양을 구성하여</h3>
        <h3>회사 또는 팀의 업무 방식에 맞게 프로젝트의 이슈를 관리하세요</h3>

        <section className="flex-start step3-1">
          <article className="board">
            <div className="img">
              <img src="/images/main_board_1.png" />
            </div>
            <h3>단순 구조 보드</h3>
            <h4 className="desc">일반적으로 많이 사용하는 기본 형태의 보드로 가로열을 업무 진행 단위별로 구분하여 진행상황을 표시하는 보드 형태</h4>
          </article>

          <article className="board">
            <div className="img">
              <img src="/images/main_board_2.png" />
            </div>
            <h3>2단 구조 보드</h3>
            <h4 className="desc">진행 단위별로 세로열을 세분화하여 하나 이상의 진행단계를 담당자 및 이벤트 또는 진행하는 팀의 목적에 맞게 분리하여 표시하는 보드 형태</h4>
          </article>

          <article className="board">
            <div className="img">
              <img src="/images/main_board_3.png" />
            </div>
            <h3>3단 구조 보드</h3>
            <h4 className="desc">진행 단위별로 세로열을 세분화한 후 또 다시 각각의 항목을 목적에 맞게 분리하여 구성한 고급 사용자를 위한 보드 형태</h4>
          </article>
        </section>

        <section className="flex-start step3-2" style={{marginTop:"160px"}}>
          <img src="/images/main_str.png" />
          <article className="board">
            <div><h1>여기는 제목이다</h1></div>
            <div><h3>여기는 상세다</h3></div>
          </article>
        </section>
      </div>
    </section>
    </>
  );
}

export default MainPage;
