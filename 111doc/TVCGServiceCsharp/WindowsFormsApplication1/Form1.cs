using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Xml;
using System.Net;
using System.IO;
using Newtonsoft.Json;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
     


        private void Form1_Load(object sender, EventArgs e)
        {
         
           
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //login
            var client = new MyWebClient();
            var text = client.DownloadString("http://thuvienconggiaovietnam.net/service/login?email=t@gmail.com&password=t");
            label1.Text = text;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            //get all book
            var client = new MyWebClient();
            var text = client.DownloadString("http://thuvienconggiaovietnam.net/service/getbook?user_id=20");
           

          DataTable dt = (DataTable) JsonConvert.DeserializeObject(text, (typeof(DataTable)));
          dataGridView1.DataSource = dt;

        }

        private void button3_Click(object sender, EventArgs e)
        {
            //get all book
            var client = new MyWebClient();
            var text = client.DownloadString("http://thuvienconggiaovietnam.net/service/getbook?user_id=20&id_list=37,43");
           

            DataTable dt = (DataTable)JsonConvert.DeserializeObject(text, (typeof(DataTable)));
            dataGridView1.DataSource = dt;
        }
    }
    public class MyWebClient : WebClient
    {
        protected override WebRequest GetWebRequest(Uri uri)
        {
            WebRequest w = base.GetWebRequest(uri);
            w.Timeout = 20 * 60 * 1000;
            return w;
        }
    }

}
