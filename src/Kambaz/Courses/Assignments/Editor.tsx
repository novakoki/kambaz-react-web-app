export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" value="Group 1">
                    <option value="Group 1">Group 1</option>
                    <option value="Group 2">Group 2</option>
                    <option value="Group 3">Group 3</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as" value="Letter">
                    <option value="Letter">Letter</option>
                    <option value="Percentage">Percentage</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type" value="Online URL">
                    <option value="Online URL">Online URL</option>
                    <option value="File Upload">File Upload</option>
                    <option value="Text Entry">Text Entry</option>
                </select>
                <p>
                Online Entry Options
                <br />
                    <input type="checkbox" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label>
                    <br />
                    <input type="checkbox" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label>
                    <br />
                    <input type="checkbox" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                    <br />
                    <input type="checkbox" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label>
                    <br />
                    <input type="checkbox" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Upload</label>
                    <br />
                </p>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-name">Assign</label>
            </td>
            <td>
        <tr>
            <td valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
                <input id="wd-assign-to" value="All Students" />
            </td>
        </tr>
        <tr>
            <td valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
                <input type="date" id="wd-due-date" value="2025-01-01" />
            </td>
        </tr>
        <tr>
            <td valign="top">
                <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
            <label htmlFor="wd-available-until">Available Until</label>
                
            </td>
        </tr>
        <tr>
            <td valign="top">
            <input type="date" id="wd-available-from" value="2025-01-01" />
            </td>
            <td>
                <input type="date" id="wd-available-until" value="2025-01-01" />
            </td>
        </tr>
        </td>
        </tr>
        <tr>
            <td align="right" valign="top">
            </td>
            <td align="right" valign="top">
                <button>Cancel</button>
                <button>Save</button>
            </td>
        </tr>
      </table>
    </div>
);}
  