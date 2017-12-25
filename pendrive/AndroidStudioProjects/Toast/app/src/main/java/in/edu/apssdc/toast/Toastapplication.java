package in.edu.apssdc.toast;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class Toastapplication extends AppCompatActivity {
int count=0
    Textview textview;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        textview=(Textview) findViewById(R.id.textView5)
        setContentView(R.layout.activity_main ,toastapplication);
    }

    public void toast(View view) {
        Toast.makeText(this,"aits",Toast.LENGTH_LONG).show();
    }

    public void count(View view) {
    count++;
        textview.setText(" "+count);
    }
}
