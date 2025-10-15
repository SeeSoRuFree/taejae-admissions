import React from 'react';

const InternationalAdmissionsPage = ({ onNavigate }) => {
  const admissionsSchedule = [
    {
      track: 'Early Action',
      applicationOpen: '2025 / 11 / 01',
      stage1Deadline: '2025 / 12 / 31',
      stage2Interview: '2026 / 01',
      resultsAnnounced: '2026 / 01 / 31'
    },
    {
      track: 'Regular Decision',
      applicationOpen: '2026 / 01 / 01',
      stage1Deadline: '2026 / 03 / 15',
      stage2Interview: '2026 / 04',
      resultsAnnounced: '2026 / 05 / 15'
    },
    {
      track: 'Rolling Admissions',
      applicationOpen: '2026 / 03 / 16',
      stage1Deadline: '2026 / 04 / 15',
      stage2Interview: '2026 / 05',
      resultsAnnounced: '2026 / 05 / 31'
    }
  ];


  return (
    <div className="container international_admissions">
      {/* Hero Section */}
      <div className="international_hero">
        <div className="hero_content">
          <div className="hero_text">
            <h1>INTERNATIONAL<br />ADMISSIONS<br />GUIDELINES</h1>
          </div>
          <div className="hero_logo">
            <div className="taejae_logo_text">TAEJAE<br />UNIVERSITY</div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="requirements_section">
        <div className="inner">
          <div className="requirements_grid">
            <div className="requirement_card nationality">
              <h3>NATIONALITY REQUIREMENTS</h3>
              <p>Applicants and their parents must be non-Korean citizens (including dual citizenship).*</p>
            </div>
            <div className="requirement_card educational">
              <h3>EDUCATIONAL REQUIREMENTS</h3>
              <p>Applicants must receive a high-school diploma or equivalent certificate before enrollment.</p>
            </div>
            <div className="requirement_card language">
              <h3>LANGUAGE REQUIREMENTS</h3>
              <p>All coursework is in English. Applicants are expected to be sufficiently proficient in English.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div id="application-process" className="application_process_section">
        <div className="inner">
          <h2>APPLICATION PROCESS</h2>
          
          {/* Stage 1 */}
          <div className="stage_container">
            <div className="stage_header stage1">
              <h3>STAGE 1<br />WRITTEN<br />APPLICATION</h3>
              <div className="stage_note">All documents submitted via CommonApp</div>
            </div>
            <div className="stage_content">
              <div className="application_item">
                <h4>1. Self-Development Plan</h4>
                <p>Written responses to three core application questions, detailing personal experiences and motivations for applying.</p>
              </div>
              <div className="application_item">
                <h4>2. High School Transcripts & Diploma</h4>
                <p>Official proof of high school graduation or equivalency must be provided.</p>
              </div>
              <div className="application_item">
                <h4>3. Letter of Recommendation</h4>
                <p>One recommendation letter written in English by a teacher or college counselor, highlighting the applicant's aptitude for Taejae University.</p>
              </div>
              <div className="optional_submissions">
                <p><strong>Optional submissions:</strong> English-language proficiency scores (TOEFL, IELTS, etc.), standardized test scores (SAT, ACT, etc.), academic certificates and awards, creative portfolios, research projects, volunteer work documentation, extracurricular activity records, etc.</p>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="stage_container">
            <div className="stage_header stage2">
              <h3>STAGE 2<br />ONLINE<br />INTERVIEW</h3>
            </div>
            <div className="interview_table">
              <table>
                <thead>
                  <tr>
                    <th>Admissions Track</th>
                    <th>Interview Type</th>
                    <th>Content</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Early Action<br />+ Rolling Admissions</td>
                    <td>Admissions committee interview</td>
                    <td rowSpan="2">
                      <div className="assessment_content">
                        Discuss written application materials and individualized questions in order to assess:
                        <ul>
                          <li>academic aptitude</li>
                          <li>core values</li>
                          <li>leadership & initiative</li>
                          <li>communication skills</li>
                          <li>growth potential</li>
                        </ul>
                      </div>
                    </td>
                    <td rowSpan="2">15<br />minutes</td>
                  </tr>
                  <tr>
                    <td>Regular Decision</td>
                    <td>AI-assisted interview</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Start your Application Section */}
      <div className="start_application_section">
        <div className="inner">
          <h2>Start your Application</h2>
          
          <button 
            className="common_app_button"
            onClick={() => window.open('https://www.commonapp.org/', '_blank')}
          >
            Common Application
          </button>
          
          <div className="process_description">
            <p>The following admissions process is for international students<br />
            (See Eligibility Requirements for more information).</p>
          </div>
          
          <div className="admissions_guideline">
            <h3>Admissions Guideline for International Students</h3>
            <a 
              href="/2026 Taejae International Admissions Guide_251002.pdf" 
              download="2026 Taejae International Admissions Guide.pdf"
              className="download_button"
            >
              Download Here
            </a>
          </div>
        </div>
      </div>

      {/* Schedule & Tuition Section */}
      <div id="schedule-tuition" className="schedule_tuition_section">
        <div className="inner">
          {/* Admissions Schedule */}
          <div className="schedule_container">
            <h2>ADMISSIONS SCHEDULE</h2>
            <div className="schedule_table">
              <table>
                <thead>
                  <tr>
                    <th>Admissions Track</th>
                    <th>Application Open Dates</th>
                    <th>Stage 1 Deadlines</th>
                    <th>Stage 2 Interviews</th>
                    <th>Results Announced</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionsSchedule.map((schedule, index) => (
                    <tr key={index}>
                      <td className="track_name">{schedule.track}</td>
                      <td>{schedule.applicationOpen}</td>
                      <td>{schedule.stage1Deadline}</td>
                      <td>{schedule.stage2Interview}</td>
                      <td>{schedule.resultsAnnounced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="schedule_note">*Exact dates may be subject to change.</p>
          </div>

          {/* Tuition & Scholarships */}
          <div className="tuition_container">
            <h2>TUITION AND SCHOLARSHIPS<br />FOR INTERNATIONAL STUDENTS</h2>
            <p className="international_notice_text">
              ※ Full information on tuition and scholarships will be provided to admitted students before enrollment.
            </p>

            {/* 등록금 표 */}
            <div className="tuition_table_section">
              <table className="tuition_table">
                <thead>
                  <tr>
                    <th colSpan="2">Annual Cost of Taejae University's Program</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="category">Academic Tuition</td>
                    <td className="amount">~15,000 USD</td>
                  </tr>
                  <tr>
                    <td className="category">
                      Residence and Global Engagement<br/>
                      <span className="sub_amount">expenses (variable by global location)</span>
                    </td>
                    <td className="amount">~19,000 USD</td>
                  </tr>
                  <tr>
                    <td className="category total_row">TOTAL</td>
                    <td className="amount total_row">~34,000 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 추가 설명 */}
            <div className="additional_info">
              <p className="info_paragraph">
                The tuition for international students is $15,000 per year. The costs for residences and other programs will vary somewhat by global location and circumstance. For the Seoul location, the residence and its associated programs cost approximately $19,000. All international students receive full funding of tuition fees for their first semester of enrollment.
              </p>

              <p className="info_paragraph">
                Taejae University is committed to meeting students' academic financial needs as much as possible to ensure that our students can fully exploit all the educational advantages our school offers. Taejae thus provides considerably more opportunities for financial support and scholarships than most higher education institutions around the world. This includes extensive Work-Study scholarships to provide our students with additional assistance in covering personal expenses incurred during the school year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Taejae Section */}
      <div id="why-taejae" className="why_taejae_section">
        <div className="inner">
          <h2>WHY TAEJAE?</h2>
          
          <div className="testimonials">
            <div className="testimonial student_testimonial">
              <div className="quote_content">
                <blockquote>
                  "Joining Taejae was a turning point when I went from following a pre-determined path to actively leading my own life"
                </blockquote>
                <cite>- Yejoon Song, TJ23</cite>
              </div>
            </div>

            <div className="testimonial faculty_testimonial">
              <div className="quote_content">
                <blockquote>
                  "Taejae University is the first place I've taught at that puts students at the front of the learning process - teaching them not to memorize and take notes, but to apply what they learn to the world around them."
                </blockquote>
                <cite>- Professor Steve Justice, Dept. of Innovation Foundations</cite>
              </div>
            </div>
          </div>

          <div className="university_description">
            <p>
              Taejae University was built to cultivate critically-minded, action-driven global citizens and thinkers. 
              We encourage and enable our students to create new paths for themselves by sending them all 
              around the world to see what is out there and discover what they can achieve. We are and unique 
              university and we are not for everybody. We're not looking for the "best" students, we're looking 
              for the ones that are right for us.
            </p>
          </div>

          <div className="call_to_action">
            <h3>Discover your potential, build your future,<br />find your Next Answer at Taejae University.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalAdmissionsPage;