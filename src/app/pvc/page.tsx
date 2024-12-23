import '@/app/css/pvc.css';

// 개인정보처리방침
const Privacy = () =>{

    return (
        <div className="pvc">
            <section className="step1 box">
                <h1 className="title">개인정보처리방침</h1>
            </section>

            <section className="step2">
                <article className="line">{ /** 사선 배경 부분 */}</article>
                <article>
                    <div className="box pre">
                        <h4>봄즈(이하 &quot;회사&quot;)는 본 서비스를 이용하는 자(이하 &quot;이용자&quot; 또는 &quot;회원&quot;)의 권리를 보호하기 위하여 「개인정보 보호법」(이하 &quot;개인정보보호법&quot;) 및 관계 법령이 정한 바를 준수하며, 개인정보의 처리와 관련한 이용자의 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</h4>

                        <h2>제1 조(개인정보 처리목적)</h2>
                            <h4>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경될 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 수행할 예정입니다.</h4>

                            <h3>1. 회원가입 및 관리</h3>
                            <h4 className="sub1">회원제 서비스 이용에 따른 본인확인, 개인식별, 이용약관에 위반되는 회원에 대한 이용제한 조치, 가입의사확인, 서비스의 원활한 운영에 지장을 주는 서비스 부정이용 행위 제재, 분쟁 조정을 위한 기록보존, 고지사항 전달, 회원탈퇴 의사 확인 등을 목적으로 개인정보를 처리합니다.</h4>

                            <h3>2.민원사무 처리</h3>
                            <h4 className="sub1">민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</h4>

                            <h3>3. 서비스 제공 및 주문 결제</h3>
                            <h4 className="sub1">서비스 제공, 콘텐츠 제공 및 주문 결제 등을 목적으로 개인정보를 처리합니다.</h4>

                            <h3>4. 신규 서비스 개발 및 이벤트 정보 제공에 활용</h3>
                            <h4 className="sub1">서비스의 유효성 확인, 신규 서비스 개발, 통계학적 특성에 따른 서비스 제공 및 이벤트 정보 제공 등을 목적으로 개인정보를 처리합니다.</h4>

                        <h2>제2 조(처리하는 개인정보의 항목)</h2>
                            <h4>회사는 서비스 제공을 위하여 다음 각 호의 기준에 따라 개인정보를 수집·이용합니다.</h4>

                            <h3>1. 이용자의 동의를 받지 않고 처리하는 개인정보 항목</h3>
                            <h4 className="sub1">회사는 다음의 개인정보 항목을 이용자의 동의 없이 처리하고 있습니다.</h4>

                            <h4 className="sub1">A. 비밀번호, 성명(한자·영문 성명 포함), 이메일주소, 사번, 직책, 부서</h4>
                            <h4 className="sub2">보유 기간 : 회원 탈퇴시까지</h4>
                            
                            <h4 className="sub1">B. 주문 결제 ID, 이용내역, 구매이력, 결제정보(결제수단, 결제금액, 결제일시, 결제승인번호)</h4>
                            <h4 className="sub2">보유 기간 : 5년</h4>

                        <h2>제3 조(개인정보의 처리 및 보유 기간)</h2>
                            <h4>회사는 법령에 따른 개인정보 보유·이용 기간 또는 이용자로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리하고 보유합니다.</h4>
                            <h4>각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</h4>
                            
                            <h3>1. 회원 가입 및 관리 : 회원 탈퇴 시까지. 단, 다음 사유에 해당하는 경우에는 해당 사유 종료시까지</h3>
                            <h4 className="sub1">A. 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료시까지</h4>
                            <h4 className="sub1">B. 홈페이지 이용에 따른 채권·채무 관계 잔존 시에는 해당 채권·채무 관계 정산시까지</h4>

                            <h3>2. 재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제·정산 완료시까지. 단, 다음 사유에 해당하는 경우에는 해당 기간 종료시까지</h3>
                            <h4 className="sub1">A. 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년</h4>
                            <h4 className="sub1">B. 소비자 불만 또는 분쟁처리에 관한 기록 : 3년</h4>

                            <h3>3. 신규 서비스 개발 및 마케팅 활용 : 회원 탈퇴 또는 동의 철회시까지</h3>
                            <h4 className="sub1">이용자가 서비스를 해지할 경우, 관련 법에 지정된 자료 보관을 위한 정보 외의 이용자 개인정보는 모두 삭제됩니다.</h4>

                        <h2>제4 조 (개인정보처리의 위탁)</h2>
                            <h4>회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</h4>
                            <h3>1. NHN클라우드</h3>
                            <h4 className="sub1">파일 저장, 메일 발송, 이메일 전송</h4>
                        
                        <h2>제5 조(개인정보의 파기절차 및 방법)</h2>
                            <h3>1. 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</h3>
                            <h3>2. 이용자로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보관하여야 하는 경우에는 해당 개인정보를 별도의 DB에 옮기거나 종이의 경우 별도의 장소에서 보관합니다.</h3>
                            
                        <h2>제6 조(회원 및 법정대리인의 권리와 행사방법)</h2>
                            <h3>1. 회사는 14세 미만 아동의 개인정보를 처리하기 위하여 동의가 필요한 경우에는 해당 아동의 법정대리인으로부터 동의를 받습니다.</h3>
                            <h3>2. 회원 및 법정대리인은 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</h3>
                                <h4 className="sub1">A. 개인정보 열람 요청</h4>
                                <h4 className="sub1">B. 오류 등이 있을 경우 개인정보 정정 요청</h4>
                                <h4 className="sub1">C. 개인정보 삭제 요청</h4>
                                <h4 className="sub1">D. 개인정보 처리정지 요청</h4>
                            <h3>3. 제1항에 따른 권리 행사는 회사에 대해 이메일을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</h3>
                                <h4 className="sub1">이메일 : bom@bomz.app</h4>
                            <h3>4. 회원 및 법정대리인이 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</h3>

                        <h2>제7 조(개인정보 자동수집장치 설치/운영 및 그 거부에 관한 사항)</h2>
                            <h3>1. 회사는 이용자에게 개별적인 서비스를 제공하기 위해 이용정보를 자동으로 수집하여 회원의 단말기에 저장하거나 회사 서버에 정보를 저장 및 관리할 수 있는 장치를 설치 및 운영할 수 있습니다.</h3>
                            <h3>2. 이용자는 제1항 장치에 대하여 선택권을 가지며, 이 장치에 의한 개인정보 수집에 동의하지 않을 시, 이를 거부할 수 있습니다. 다만, 거부 시에는 서비스 이용이 불가합니다.</h3>
                        
                        <h2>제8 조(개인정보의 기술적, 관리적 보호 대책)</h2>
                            <h4>회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 다음 각 호와 같은 기술적, 관리적 대책을 강구하고 있습니다.</h4>

                            <h3>1. 개인정보 암호화</h3>
                            <h4 className="sub1">비밀번호는 이용자의 휴대폰과 서버에 나뉘어 암호화 저장되고 안전하게 관리되고 있습니다.</h4>

                            <h3>2. 해킹 등에 대비한 기술적 대책</h3>
                            <h4 className="sub1">회사는 해킹이나 외부 바이러스 등에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 차단하기 위해 최선을 다하고 있습니다. 회사는 이용자의 개인정보 및 거래내역을 정기적으로 관리 및 백업하고, 서버간 암호화 통신을 통해 네트워크상 회원 정보를 안전하게 전송하도록 설계합니다. 또한 차별화된 암호화 시스템관리로 외부침입을 차단하고 있으며, 이 외 시스템적인 보안성을 확보하기 위해 모든 기술적 장치와 방법을 갖추기 위해 최선을 다합니다.</h4>

                            <h3>3. 개인정보처리시스템 접근 제한</h3>
                            <h4 className="sub1">회사는 개인정보를 처리할 수 있도록 체계적으로 구성한 데이터베이스에 대한 접근권한의 부여, 변경, 말소 등에 관한 기준을 수립하고 비밀번호의 생성 방법, 변경 주기 등을 규정 운영하며 기타 개인정보에 대한 접근 통제를 위해 필요한 조치를 다하고 있습니다.</h4>

                        <h2>제9 조(개인정보관리 책임자 및 담당자의 연락처)</h2>
                            <h3>1. 본 서비스의 이용자는 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원을 개인정보 관리책임자에게 신고하실 수 있습니다.</h3>
                            <h3>2. 고객의 개인정보보호와 관련하여 문의사항이 있으시면 아래 개인정보 관리 책임자 또는 개인정보 관리 담당자에게 연락을 주시기 바랍니다.</h3>
                            <h4 className="sub1">조용철 (supinan@bomz.app)</h4>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Privacy;