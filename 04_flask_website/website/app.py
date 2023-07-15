import json,os,sys
from flask import Flask
from flask import render_template
from get_geojson.marketcap_geojson_map import MC_Scraper as MC_map
from get_geojson.marketcap_geojson_bar import MC_Scraper as MC_bar

def create_app():
    app=Flask(__name__, instance_relative_config=True)
    # app.config.from_object('config.settings')
    # app.config.from_pyfile('settings.py', silent=False)
    # app.env == 'development'

    @app.route('/')
    def index():
        app.logger.info('path: /')
        app.logger.warning('path: /')
        app.logger.error('path: /')
        return render_template('index.html')

    @app.route('/get_geojson_for_map')
    def get_geojson_for_map():
        print('starting geojson for map scraper',file=sys.stderr)
        url="https://companiesmarketcap.com/usa/largest-companies-in-the-usa-by-market-cap"
        #mc=mg.MC_Scraper(url)
        mc=MC_map(url)
        print('getting data',file=sys.stderr)
        mc.get_data()
        print('getting additional data',file=sys.stderr)
        mc.get_additional_data()
    ##    mc.print_dd()
    ##    mc.save_to_csv('top_100_company_tickers.csv')
        cwd=os.path.dirname(__file__)
        print('cwd is: %s'%cwd,file=sys.stderr)
        print('saving file',file=sys.stderr)
        mc.save_to_json(os.path.join(cwd,'static/map_one/data.geojson'))
        print('completed',file=sys.stderr)
        return "done."
        
    @app.route('/get_geojson_for_bar')
    def get_geojson_for_bar():
        print('starting geojson for bar scraper',file=sys.stderr)
        url="https://companiesmarketcap.com/usa/largest-companies-in-the-usa-by-market-cap"
        #mc=mg.MC_Scraper(url)
        mc=MC_bar(url)
        print('getting data',file=sys.stderr)
        mc.get_data()
        print('getting additional data',file=sys.stderr)
        mc.get_additional_data()
    ##    mc.print_dd()
    ##    mc.save_to_csv('top_100_company_tickers.csv')
        cwd=os.path.dirname(__file__)
        print('cwd is: %s'%cwd,file=sys.stderr)
        print('saving file',file=sys.stderr)
        mc.save_to_json(os.path.join(cwd,'static/bar_chart/data.geojson'))
        print('completed',file=sys.stderr)
        return "done."
    #
    #
    #
    #
    return app

if __name__=='__main__':
    app=create_app()
    os.environ['FLASK_ENV']='development' 
    port=int(os.environ.get('PORT', 8080))
    app.run(debug=True, host='0.0.0.0', port=port)
