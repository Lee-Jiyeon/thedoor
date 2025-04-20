import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { Helmet } from 'react-helmet';

import Column from 'mastodon/components/column';

class Notice extends PureComponent {

  static propTypes = {
    intl: PropTypes.object,
    multiColumn: PropTypes.bool,
  };

  state = {
    content: null,
    lastUpdated: null,
    isLoading: true,
  };

  componentDidMount () {
  }

  render () {
    const { multiColumn } = this.props;

    return (
      <Column bindToDocument={!multiColumn} label={"공지사항"}>
        <div className='scrollable privacy-policy'>
          <div className='column-title'>
            <div className='notice'>
              <h1>THE DOOR</h1>
              <span className='meta'>마스토돈 05 2233&gt;4444 3W 글그림 복합 시리어스 간단 신청서</span>
              <br />
              <span className='meta'>해리포터 기반 진영 대립 567&gt;성인 무전투 러너 간 살해 가능</span>
            </div>
          </div>
          <div className='notice'>
            <h2>개요</h2>
            <p>본 커뮤니티는 J.K. 롤링의 <b>해리 포터 시리즈</b>를 기반으로 한 커뮤니티입니다.</p>
            <p className='list'>❖ 러닝에 앞서 원작 숙지를 필요로 하며 설정 인정 범위는 1-7권으로 제한합니다.</p>
            <p className='list'>❖ 혈통 차별과 창작 세계관 요소가 포함되어 있습니다.</p>
            <br />
            <p>본 커뮤니티는 <b>무거운 분위기를 지향</b>하는 마스토돈 커뮤니티입니다.</p>
            <p className='list'>❖ 첫 커뮤니티, 첫 시리어스 커뮤니티 러닝이 불가합니다.</p>
            <p className='list'>❖ 첫 마스토돈 커뮤니티를 허용하고 있습니다.</p>
            <p className='list'>❖ 첫 해리포터 커뮤니티를 허용하고 있습니다. 단, 원작 숙지를 전제로 해 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티는 세계관과 스토리 진행에 <b>사이비 종교 소재와 상해, 살해와 같은 폭력 묘사</b>가 포함되어 있습니다. 덧붙여 커뮤니티의 등장인물, 사건, 배경은 모두 허구임을 명시합니다.</p>
            <p className='list'>❖ 소재에 불편함을 느끼실 경우 신청을 재고해 주시기 바랍니다.</p>
            <p className='list'>❖ 러닝 중 가상과 현실에 혼동이 올 경우 운영진과 상의 하 활동을 중단해 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티는 성인 이용가로, <b>2005년 이전 출생자</b>에 한해 러닝이 가능합니다.</p>
            <p className='list'>❖ 빠른 년생은 허용하지 않으며, 나이 속임 행위가 적발될 경우 즉각 제명 조치됩니다.</p>
            <p className='list'>❖ 방송통신심의위원회 SafeNet 기준, 아래와 같은 심의 등급을 따르고 있습니다.</p>
            <table class='notice-rating-table'>
              <thead>
                <tr>
                  <th>성장 전</th>
                  <th>성장 후</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    노출 &nbsp;&nbsp; 2 - 부분 노출<br />
                    성행위 2 - 착의 상태의 성적 접촉<br />
                    폭력 &nbsp;&nbsp; 3 - 살해<br />
                    언어 &nbsp;&nbsp; 3 - 심한 비속어
                  </td>
                  <td>
                    노출 &nbsp;&nbsp; 4 - 성기 노출<br />
                    성행위 4 - 노골적인 성행위<br />
                    폭력 &nbsp;&nbsp; 4 - 잔인한 살해<br />
                    언어 &nbsp;&nbsp; 4 - 노골적인 비속어
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p className='list'>❖ 본 심의 등급에 준하는 내용이라도 사전 조율 없이 상대에게 불쾌감을 주는 경우 운영진의 제제가 있을 수 있습니다.</p>
            <p className='list'>❖ 민감한 내용의 역극 혹은 로그는 DM 조율 및 마스토돈 기능을 적극 활용해 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티는 리뉴얼 기간을 포함하여 <b>3주</b> 동안 진행될 예정입니다.</p>
            <p className='list'>❖ 학생 기간 7일, 리뉴얼 기간 4일, 성인 기간 10일로 총 3주의 일정이 예정되어 있습니다.</p>
            <p className='list'>❖ 리뉴얼 신청서 지각 사유로 1차 인트로 일정이 지연될 경우 성인 기간이 축소되는 방향으로 진행됩니다.</p>
            <br />
            <p>본 커뮤니티는 글・그림 복합 커뮤니티로서 프로그램 인장을 포함한 그림 인장과 분위기 인장, 단색 인장을 허용합니다. 실사 및 AI 인장은 사용하실 수 없습니다.</p>
            <p className='list'>❖ 지인 지원 및 커미션, 픽크루 사용 등 본인의 그림이 아닌 경우 출처를 명확히 밝혀 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티에 대한 모든 문의사항은 카카오톡 <b>오픈채팅</b>으로 접수 부탁드립니다.</p>
            <p className='list'>❖ 운영진의 답변 가능 시간은 <b>오전 10시부터 오후 11시까지</b>입니다. 이외의 시간에는 확인이 어려울 수 있습니다.</p>
            <p className='list'>❖ <a href='https://open.kakao.com/me/thedoorforwho' target='_blank' rel='noopener noreferrer'>오픈채팅 바로가기</a></p>
            <br />
            <h2>러닝</h2>
            <p>본 커뮤니티는 캐릭터 간의 사상 대립과 갈등을 기반으로 한 서사 교류를 목적으로 합니다.
              따라서 별도의 <b>전투 시스템을 운영하지 않습니다.</b> 대신 오너 간의 합의를 통해 <b>러너 간 살해가 가능</b>합니다.
              자세한 사항은 <a href='https://docs.google.com/document/d/1R0KjUDubJyrL3X087U36ri6ElDyGgzZnvyJZSI9SaQo/edit?tab=t.6ss89awrfv0' target='_blank' rel='noopener noreferrer'>시스템 문서</a>를 확인해 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티는 통금 시간이 존재하며, <b>오전 2시부터 오전 7시까지</b> 퍼블릭과 멘션을 포함한 <b>모든 툿을 제한</b>합니다.</p>
            <p className='list'>❖ 편파 방지와 쾌적한 운영을 위해 양해 부탁드리며, 해당 시간 외에 활동이 어려우신 분들은 신청을 재고해 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티의 인트로 및 아웃트로를 포함한 메인 스토리 진행 시각은 <b>오후 10시</b>입니다.</p>
            <p className='list'>❖ 원활한 활동을 위해 스토리 진행일에는 통금이 적용되지 않습니다.</p>
            <br />
            <p>본 커뮤니티는 엔딩 기준 <b>300툿 미만</b> 캐릭터의 연락처 공유를 금지합니다.
              또한 캐릭터들과의 원활한 교류를 위해 각 기간 동안 <b>퍼블릭 툿을 1개 이상</b> 게시해 주시기 바랍니다.</p>
            <br />
            <p>본 커뮤니티에서는 <b>경고 3회 누적 시 제명</b> 처리됩니다.
              중도 하차 및 제명되었을 경우 해당 캐릭터는 처음부터 존재하지 않았던 것으로 취급되며,
              연락처 공유를 금지합니다. 자세한 사항은 아래 항목을 참고해 주시기 바랍니다.</p>
            <ul>
              <li>모든 종류의 편파 및 지인플</li>
              <li className='limeta'>모든 역극은 가급적 순서대로 답해 주시기 바랍니다.</li>
              <li className='limeta'>타 러너에게 소외감을 줄 수 있는 행위는 삼가해 주시기 바랍니다.</li>
              <li className='limeta'>단발성 대화를 지속적으로 우선하는 역극을 삼가해 주시기 바랍니다.</li>
              <li>총괄계를 포함하지 않은 DM 대화</li>
              <li>3인 이상의 멘션 대화</li>
              <li>30분 이상 지속되는 타임라인 대화</li>
              <li>사념 대화를 포함한 메타 발언</li>
              <li>초성체 및 이모지, 이모티콘 사용</li>
              <li>시리어스 커뮤에 맞지 않는 과도한 개그성 역극</li>
              <li className='limeta'>타 러너의 몰입을 저해하는 행위는 삼가해 주시기 바랍니다.</li>
              <li className='limeta'>이외 세계관에 맞지 않는 행위는 삼가해 주시기 바랍니다.</li>
              <li>러닝 중 신청서에 명시되지 않은 설정 추가</li>
              <li>러닝 중 타 캐릭터와 로맨스 관계 형성</li>
              <li>리뉴얼 신청서 지각</li>
              <li>48시간 이상 무통보 잠수</li>
              <li className='limeta'>제명을 막기 위한 무의미한 툿은 활동으로 인정되지 않습니다.</li>
            </ul>
            <br />
            <p className='list'>❖ 이외에도 운영진 판단하에 커뮤니티 질서를 해치거나 타 러너에게 불쾌감을 줄 수 있는 모든 행위는 제재 대상이 될 수 있습니다.</p>
            <p className='list'>❖ 경고 부과는 운영진의 판단에 따라 유동적으로 적용될 수 있습니다.</p>
            <p className='list'>❖ 항시 모니터링이 불가하기 때문에 불편함을 느끼신 러너 분들은 문의용 오픈 카톡을 이용해 신고해 주시기 바랍니다.</p>
          </div>
        </div>

        <Helmet>
          <title>공지사항</title>
          <meta name='robots' content='all' />
        </Helmet>
      </Column>
    );
  }

}

export default Notice;
